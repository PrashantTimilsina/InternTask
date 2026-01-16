import { CategoryArray } from "@/types/api";
import CategoriesClient from "./CategoriesClient";

export default async function Categories({ categories }: CategoryArray) {
  return (
    <div className="container mx-auto mt-9 px-4">
      <CategoriesClient categories={categories} />
    </div>
  );
}
