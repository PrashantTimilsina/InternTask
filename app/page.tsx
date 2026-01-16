import { getCategories } from "@/api/categories";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Subscribe from "@/components/Subscribe";
import { Suspense } from "react";
function handleDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function App() {
  await handleDelay(3000);
  const categories = await getCategories();
  return (
    <div>
      <Navbar />

      <hr />
      <Hero />

      <Categories categories={categories} />

      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
