export interface Product {
  id: string;
  name: string;
  category: "ppe" | "lab" | "diagnostics" | "consumables";
  description: string;
  image: string;
  brand: string;
  inStock: boolean;
  sku: string;
  price?: string;
}
