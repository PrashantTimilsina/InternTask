import { Product } from "@/types/api";

export async function getCategories() {
  const res = await fetch("https://fakeapi.net/products/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
export async function getProducts(page: number) {
  const res = await fetch(`https://fakeapi.net/products?page=${page}&limit=4`);
  const data = await res.json();

  return data as Product[];
}
