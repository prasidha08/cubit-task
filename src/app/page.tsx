import { config } from "./_config/config";
import ProductLists from "./components/ProductLists";

async function fetchProducts() {
  const backendURL = config.backendURL;

  const projects = await fetch(`${backendURL}/products?limit=10`, {
    method: "get",
  });
  const response = await projects.json();
  return response.products;
}

export default async function Home() {
  const productResponse = await fetchProducts();
  return (
    <main className="relative flex flex-col items-center pt-[10rem] pb-[10rem] h-[100vh] overflow-auto gap-10">
      <div className="text-white text-title font-medium mb-[10px]">
        🔥 Special Offers
      </div>
      {/* this is for card */}
      <ProductLists products={productResponse} />
    </main>
  );
}
