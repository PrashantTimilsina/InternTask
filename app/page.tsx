import { getCategories } from "@/api/categories";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Subscribe from "@/components/Subscribe";
import React from "react";

async function App() {
  const categories = await getCategories();
  return (
    <div>
      <Navbar />

      <hr />
      <Hero />
      <Categories categories={categories} />
      <Products />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
