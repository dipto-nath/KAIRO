import type {
  Product,
  InventoryItem,
  Store,
  Reservation,
  DemoScenario,
  DataSource,
} from "@/types";

// ── Mock Products ──────────────────────────────────────────

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_001",
    name: "Strawberry Milk",
    nameHindi: "स्ट्रॉबेरी दूध",
    description: "Real strawberry extract, low sugar, cold-pressed milk",
    price: 65,
    currency: "INR",
    category: "beverages",
    subcategory: "dairy",
    attributes: ["Low sugar", "Cold", "Non-carbonated", "Chilled"],
    imageEmoji: "🍓",
    aisle: "Aisle 2",
    section: "Refrigerated Drinks",
    isRecommended: true,
    matchReasons: ["Under ₹70", "Cold", "Low sugar", "Available now"],
  },
  {
    id: "prod_002",
    name: "Peach Iced Tea",
    nameHindi: "पीच आइस्ड टी",
    description: "Lightly sweetened peach blend, zero artificial flavors",
    price: 55,
    currency: "INR",
    category: "beverages",
    subcategory: "tea",
    attributes: ["Light sweetness", "Cold", "Non-carbonated", "Chilled"],
    imageEmoji: "🍑",
    aisle: "Aisle 2",
    section: "Refrigerated Drinks",
    isRecommended: false,
    matchReasons: ["Under ₹70", "Cold", "Low sweetness"],
  },
  {
    id: "prod_003",
    name: "Zero Sugar Cola",
    description: "Classic cola taste, zero calories, extra carbonated",
    price: 60,
    currency: "INR",
    category: "beverages",
    subcategory: "soda",
    attributes: ["Zero sugar", "Carbonated", "Cold"],
    imageEmoji: "🥤",
    aisle: "Aisle 1",
    section: "Fizzy Drinks",
    isRecommended: false,
    matchReasons: ["Under ₹70", "Cold", "Zero sugar"],
  },
  {
    id: "prod_004",
    name: "Protein Cocoa Drink",
    description: "Dark chocolate, 20g protein, no added sugar",
    price: 95,
    currency: "INR",
    category: "beverages",
    subcategory: "protein",
    attributes: ["High protein", "Low sugar", "Cold"],
    imageEmoji: "🍫",
    aisle: "Aisle 3",
    section: "Health Drinks",
    isRecommended: false,
    matchReasons: ["Cold", "Low sugar"],
  },
  {
    id: "prod_005",
    name: "Green Apple Sparkling",
    description: "Crisp green apple, lightly carbonated, low calories",
    price: 58,
    currency: "INR",
    category: "beverages",
    subcategory: "sparkling",
    attributes: ["Low calorie", "Lightly carbonated", "Cold"],
    imageEmoji: "🍏",
    aisle: "Aisle 1",
    section: "Fizzy Drinks",
    isRecommended: false,
    matchReasons: ["Under ₹70", "Cold"],
  },
  {
    id: "prod_006",
    name: "Lychee Coconut Water",
    description: "Natural electrolytes, lychee flavored, 100% natural",
    price: 68,
    currency: "INR",
    category: "beverages",
    subcategory: "water",
    attributes: ["Natural", "Low sugar", "Cold", "Hydrating"],
    imageEmoji: "🥥",
    aisle: "Aisle 2",
    section: "Refrigerated Drinks",
    isRecommended: false,
    matchReasons: ["Under ₹70", "Cold", "Low sugar"],
  },
];

// ── Mock Inventory ─────────────────────────────────────────

export const MOCK_INVENTORY: Record<string, InventoryItem> = {
  prod_001: {
    productId: "prod_001",
    storeId: "store_042",
    quantity: 6,
    lastUpdated: new Date(),
    status: "available",
  },
  prod_002: {
    productId: "prod_002",
    storeId: "store_042",
    quantity: 8,
    lastUpdated: new Date(),
    status: "available",
  },
  prod_003: {
    productId: "prod_003",
    storeId: "store_042",
    quantity: 12,
    lastUpdated: new Date(),
    status: "available",
  },
  prod_004: {
    productId: "prod_004",
    storeId: "store_042",
    quantity: 2,
    lastUpdated: new Date(),
    status: "low_stock",
  },
  prod_005: {
    productId: "prod_005",
    storeId: "store_042",
    quantity: 0,
    lastUpdated: new Date(),
    status: "out_of_stock",
  },
  prod_006: {
    productId: "prod_006",
    storeId: "store_042",
    quantity: 5,
    lastUpdated: new Date(),
    status: "available",
  },
};

// ── Mock Store ─────────────────────────────────────────────

export const MOCK_STORE: Store = {
  id: "store_042",
  name: "Hatiara Central",
  address: "Plot 42, Hatiara Main Road, Kolkata — 700157",
  isOpen: true,
  openTime: "06:00",
  closeTime: "23:00",
};

// ── Demo Scenarios ─────────────────────────────────────────

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: "product_discovery",
    label: "Product Discovery",
    description: "Cold drink under ₹70, not too sweet",
    triggerPhrase:
      "I need a cold drink under ₹70, preferably not too sweet.",
  },
  {
    id: "low_stock",
    label: "Low Stock & Alternatives",
    description: "Item unavailable, find alternatives",
    triggerPhrase:
      "Do you have Mango Lassi?",
  },
  {
    id: "reservation",
    label: "Reservation Flow",
    description: "Reserve an item, confirm, update",
    triggerPhrase:
      "Reserve one Strawberry Milk please.",
  },
  {
    id: "safety_escalation",
    label: "Safety Escalation",
    description: "Healthcare-related request handling",
    triggerPhrase:
      "What medicine should I take for chest pain?",
  },
];

// ── Mock Reservation Factory ───────────────────────────────

export function createMockReservation(
  product: Product,
  quantity: number
): Reservation {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 30 * 60 * 1000); // 30 min
  const code = `KAIRO-${Math.floor(1000 + Math.random() * 9000)}`;
  return {
    id: `rsv_${Date.now()}`,
    productId: product.id,
    productName: product.name,
    quantity,
    unitPrice: product.price,
    totalPrice: product.price * quantity,
    storeId: MOCK_STORE.id,
    storeName: MOCK_STORE.name,
    createdAt: now,
    expiresAt,
    status: "confirmed",
    confirmationCode: code,
  };
}

// ── Data Source Status ─────────────────────────────────────

export const DATA_SOURCES: DataSource[] = [
  { id: "catalog", label: "Product Catalog", status: "demo" },
  { id: "inventory", label: "Inventory", status: "demo" },
  { id: "reservation", label: "Reservation Service", status: "demo" },
  { id: "voice", label: "Voice Engine", status: "connected" },
];
