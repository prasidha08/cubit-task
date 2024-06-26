import { config } from "./_config/config";
import Background from "./components/Background";
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
    <>
      <Background />
      <main className="relative flex flex-col items-center pt-[4rem] pb-[4rem] h-[100vh] overflow-auto gap-10 sm:pl-3 sm:pr-3">
        <div className="text-white text-title font-medium mb-[10px] flex items-center gap-4">
          <span>🔥</span>
          <p>Special Offers</p>
        </div>
        {/* this is for card */}
        <ProductLists products={productResponse} />
      </main>
    </>
  );
}
