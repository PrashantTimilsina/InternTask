export async function getCategories() {
  const res = await fetch("https://fakeapi.net/products/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
