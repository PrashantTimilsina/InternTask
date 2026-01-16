type categories =
  | "accessories"
  | "appliances"
  | "clothing"
  | "electronics"
  | "footwear"
  | "furniture"
  | "health"
  | "outdoor"
  | "sports";
export type CategoryArray = {
  categories: categories[];
};
export interface Product {
  image: string;
  brand: string;
  description: string;
  price: string;
  category: string;
}
