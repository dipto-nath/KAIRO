// ── KAIRO Type Definitions ─────────────────────────────────

export type VoiceState =
  | "idle"
  | "listening"
  | "thinking"
  | "tool_running"
  | "speaking"
  | "action"
  | "success"
  | "error";

export type AgentState =
  | "IDLE"
  | "LISTENING"
  | "UNDERSTANDING"
  | "CLARIFYING"
  | "PLANNING"
  | "TOOL_EXECUTION"
  | "VERIFYING"
  | "RESPONDING"
  | "ACTION_COMPLETE"
  | "ERROR"
  | "ESCALATION";

export type ToolStatus = "pending" | "running" | "success" | "error";

export interface ToolCall {
  id: string;
  name: string;
  displayName: string;
  status: ToolStatus;
  startedAt: Date;
  completedAt?: Date;
  input?: Record<string, unknown>;
  output?: Record<string, unknown>;
  description: string;
}

export interface TranscriptEntry {
  id: string;
  speaker: "user" | "kairo";
  text: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface ContextConstraint {
  key: string;
  label: string;
  value: string;
  icon?: string;
}

export interface ActivityStep {
  id: string;
  label: string;
  status: "pending" | "active" | "complete" | "error";
  timestamp?: Date;
}

export interface Product {
  id: string;
  name: string;
  nameHindi?: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory: string;
  attributes: string[];
  imageEmoji: string;
  aisle: string;
  section: string;
  isRecommended?: boolean;
  matchReasons?: string[];
}

export interface InventoryItem {
  productId: string;
  storeId: string;
  quantity: number;
  lastUpdated: Date;
  status: "available" | "low_stock" | "out_of_stock";
}

export interface Reservation {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  storeId: string;
  storeName: string;
  createdAt: Date;
  expiresAt: Date;
  status: "pending" | "confirmed" | "cancelled" | "expired";
  confirmationCode: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
}

export interface SessionState {
  id: string;
  status: VoiceState;
  agentState: AgentState;
  transcript: TranscriptEntry[];
  constraints: ContextConstraint[];
  activities: ActivityStep[];
  toolHistory: ToolCall[];
  products: Product[];
  selectedProduct?: Product;
  inventory?: InventoryItem;
  reservation?: Reservation;
  safetyState?: SafetyState;
  error?: string;
  metrics: SessionMetrics;
}

export interface SafetyState {
  triggered: boolean;
  reason: string;
  category: "healthcare" | "emergency" | "out_of_scope";
  escalationAvailable: boolean;
}

export interface SessionMetrics {
  startedAt: Date;
  responseLatencyMs: number;
  toolCallCount: number;
  taskCompletionRate: number;
  sessionDurationSeconds: number;
}

// ── Real-time Events ───────────────────────────────────────

export type KairoEventType =
  | "SESSION_STARTED"
  | "USER_SPEAKING"
  | "USER_TRANSCRIPT"
  | "AGENT_THINKING"
  | "AGENT_SPEAKING"
  | "TOOL_STARTED"
  | "TOOL_COMPLETED"
  | "PRODUCTS_FOUND"
  | "INVENTORY_CHECKED"
  | "ACTION_REQUIRES_CONFIRMATION"
  | "ACTION_COMPLETED"
  | "ESCALATION_REQUIRED"
  | "SESSION_ENDED"
  | "ERROR";

export interface KairoEvent {
  type: KairoEventType;
  timestamp: Date;
  payload?: Record<string, unknown>;
}

// ── Demo Scenarios ─────────────────────────────────────────

export type DemoScenarioId =
  | "product_discovery"
  | "low_stock"
  | "reservation"
  | "safety_escalation";

export interface DemoScenario {
  id: DemoScenarioId;
  label: string;
  description: string;
  triggerPhrase: string;
}

// ── Data Source Status ─────────────────────────────────────

export type DataSourceStatus = "connected" | "demo" | "error";

export interface DataSource {
  id: string;
  label: string;
  status: DataSourceStatus;
}
