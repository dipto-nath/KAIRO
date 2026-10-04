// ── KAIRO API Client ──────────────────────────────────────────
// Centralized API client for communicating with the FastAPI backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";
const WS_BASE_URL = process.env.NEXT_PUBLIC_WS_URL ?? "ws://localhost:8000/api";

// ── Product Types ─────────────────────────────────────────────

export interface ProductSearchParams {
  query?: string;
  category?: string;
  subcategory?: string;
  max_price?: number;
  min_price?: number;
  temperature?: string;
  sugar_level?: string;
  carbonated?: boolean;
  store_id?: string;
  limit?: number;
  offset?: number;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  name_hindi: string | null;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory: string;
  temperature: string;
  sugar_level: string;
  carbonated: boolean;
  brand: string | null;
  aisle: string;
  section: string;
  image_url: string | null;
  image_emoji: string | null;
  attributes: Array<Record<string, string>>;
}

export interface ProductSearchResponse {
  products: Product[];
  total: number;
  query: ProductSearchParams;
}

export interface ProductDetailResponse {
  product: Product;
  inventory: Record<string, unknown> | null;
  location: Record<string, string> | null;
  match_score: number | null;
  match_reasons: string[];
}

// ── Inventory Types ───────────────────────────────────────────

export interface InventoryCheckResponse {
  product_id: string;
  store_id: string;
  quantity: number;
  available: boolean;
  status: "available" | "low_stock" | "out_of_stock";
  last_updated: string;
}

export interface StoreInventoryResponse {
  store_id: string;
  store_name: string;
  items: Array<Record<string, unknown>>;
  total_products: number;
}

// ── Reservation Types ─────────────────────────────────────────

export interface ReservationItemRequest {
  product_id: string;
  quantity: number;
  unit_price: number;
}

export interface ReservationPrepareRequest {
  session_id: string;
  store_id: string;
  items: ReservationItemRequest[];
  idempotency_key?: string;
}

export interface ReservationPrepareResponse {
  reservation_id: string;
  reservation_code: string;
  items: Array<Record<string, unknown>>;
  total_amount: number;
  store_id: string;
  store_name: string;
  expires_at: string;
  status: string;
  requires_confirmation: boolean;
}

export interface ReservationConfirmRequest {
  reservation_id: string;
  idempotency_key?: string;
}

export interface ReservationConfirmResponse {
  reservation_id: string;
  reservation_code: string;
  status: string;
  confirmed_at: string;
  expires_at: string;
  items: Array<Record<string, unknown>>;
  total_amount: number;
}

export interface ReservationUpdateRequest {
  reservation_id: string;
  product_id: string;
  new_quantity: number;
}

export interface ReservationResponse {
  id: string;
  reservation_code: string;
  session_id: string;
  store_id: string;
  store_name: string;
  status: string;
  total_amount: number;
  items: Array<Record<string, unknown>>;
  created_at: string;
  expires_at: string;
  confirmed_at: string | null;
}

// ── API Client Class ──────────────────────────────────────────

class APIClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    return handleResponse<T>(response);
  }

  // ── Sessions ────────────────────────────────────────────────

  async createSession(request: SessionCreateRequest): Promise<SessionCreateResponse> {
    return this.request<SessionCreateResponse>("/sessions", {
      method: "POST",
      body: JSON.stringify(request),
    });
  }

  async getSession(sessionId: string): Promise<SessionStateResponse> {
    return this.request<SessionStateResponse>(`/sessions/${sessionId}`);
  }

  async endSession(sessionId: string): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>(`/sessions/${sessionId}`, {
      method: "DELETE",
    });
  }

  // ── Agent ────────────────────────────────────────────────────

  async sendMessage(request: AgentMessageRequest): Promise<AgentMessageResponse> {
    return this.request<AgentMessageResponse>("/agent/message", {
      method: "POST",
      body: JSON.stringify(request),
    });
  }

  // ── Events (SSE) ─────────────────────────────────────────────

  getEventStreamURL(sessionId: string): string {
    return `${this.baseURL}/sessions/${sessionId}/events/stream`;
  }

  async getSessionEvents(sessionId: string, limit: number = 100): Promise<SessionEventsResponse> {
    return this.request<SessionEventsResponse>(`/sessions/${sessionId}/events?limit=${limit}`);
  }

  // ── Voice ────────────────────────────────────────────────────

  async startVoiceSession(request: VoiceStartRequest): Promise<VoiceStartResponse> {
    return this.request<VoiceStartResponse>("/voice/start", {
      method: "POST",
      body: JSON.stringify(request),
    });
  }

  async stopVoiceSession(request: VoiceStopRequest): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>("/voice/stop", {
      method: "POST",
      body: JSON.stringify(request),
    });
  }

  getVoiceWebSocketURL(sessionId: string): string {
    return `${WS_BASE_URL}/ws/voice/${sessionId}`;
  }

  // ── Products ─────────────────────────────────────────────────

  async searchProducts(params: ProductSearchParams): Promise<ProductSearchResponse> {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    return this.request<ProductSearchResponse>(`/products/search?${searchParams.toString()}`);
  }

  async getProduct(productId: string, storeId?: string): Promise<ProductDetailResponse> {
    const searchParams = storeId ? `?store_id=${storeId}` : "";
    return this.request<ProductDetailResponse>(`/products/${productId}${searchParams}`);
  }

  // ── Inventory ────────────────────────────────────────────────

  async checkInventory(productId: string, storeId: string, quantity: number = 1): Promise<InventoryCheckResponse> {
    return this.request<InventoryCheckResponse>(
      `/inventory/${productId}?store_id=${storeId}&quantity=${quantity}`
    );
  }

  async getStoreInventory(storeId: string, includeOutOfStock: boolean = false): Promise<StoreInventoryResponse> {
    return this.request<StoreInventoryResponse>(
      `/stores/${storeId}/inventory?include_out_of_stock=${includeOutOfStock}`
    );
  }

  // ── Reservations ─────────────────────────────────────────────

  async prepareReservation(request: ReservationPrepareRequest): Promise<ReservationPrepareResponse> {
    return this.request<ReservationPrepareResponse>("/reservations/prepare", {
      method: "POST",
      body: JSON.stringify(request),
    });
  }

  async confirmReservation(request: ReservationConfirmRequest): Promise<ReservationConfirmResponse> {
    return this.request<ReservationConfirmResponse>(
      `/reservations/${request.reservation_id}/confirm`,
      {
        method: "POST",
        body: JSON.stringify({ idempotency_key: request.idempotency_key }),
      }
    );
  }

  async updateReservation(request: ReservationUpdateRequest): Promise<ReservationResponse> {
    return this.request<ReservationResponse>(
      `/reservations/${request.reservation_id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          product_id: request.product_id,
          new_quantity: request.new_quantity,
        }),
      }
    );
  }

  async cancelReservation(reservationId: string): Promise<ReservationResponse> {
    return this.request<ReservationResponse>(`/reservations/${reservationId}`, {
      method: "DELETE",
    });
  }

  async getReservation(reservationId: string): Promise<ReservationResponse> {
    return this.request<ReservationResponse>(`/reservations/${reservationId}`);
  }

  // ── Health ───────────────────────────────────────────────────

  async healthCheck(): Promise<{ status: string; service: string; version: string }> {
    return this.request<{ status: string; service: string; version: string }>("/health");
  }
}

// Singleton instance
export const api = new APIClient();

// Helper to convert backend Product to frontend Product type
export function convertBackendProduct(backendProduct: Product): import("@/types").Product {
  return {
    id: backendProduct.id,
    name: backendProduct.name,
    nameHindi: backendProduct.name_hindi ?? undefined,
    description: backendProduct.description,
    price: backendProduct.price,
    currency: backendProduct.currency,
    category: backendProduct.category,
    subcategory: backendProduct.subcategory,
    attributes: backendProduct.attributes.flatMap((attr) => Object.values(attr)),
    imageEmoji: backendProduct.image_emoji ?? "📦",
    aisle: backendProduct.aisle,
    section: backendProduct.section,
    isRecommended: false,
    matchReasons: [],
  };
}

// Helper to convert backend Inventory to frontend InventoryItem type
export function convertBackendInventory(backendInventory: InventoryCheckResponse): import("@/types").InventoryItem {
  return {
    productId: backendInventory.product_id,
    storeId: backendInventory.store_id,
    quantity: backendInventory.quantity,
    lastUpdated: new Date(backendInventory.last_updated),
    status: backendInventory.status,
  };
}

// Helper to convert backend Reservation to frontend Reservation type
export function convertBackendReservation(backendReservation: ReservationResponse): import("@/types").Reservation {
  return {
    id: backendReservation.id,
    productId: backendReservation.items[0]?.product_id ?? "",
    productName: backendReservation.items[0]?.product_name ?? "",
    quantity: backendReservation.items[0]?.quantity ?? 1,
    unitPrice: backendReservation.items[0]?.unit_price ?? 0,
    totalPrice: backendReservation.total_amount,
    storeId: backendReservation.store_id,
    storeName: backendReservation.store_name,
    createdAt: new Date(backendReservation.created_at),
    expiresAt: new Date(backendReservation.expires_at),
    status: backendReservation.status as import("@/types").Reservation["status"],
    confirmationCode: backendReservation.reservation_code,
  };
}