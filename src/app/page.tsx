"use client";

import ProductCards from "./components/ProductCards";
import { AnimatePresence } from "framer";
import { config } from "./_config/config";

async function fetchProducts() {
  const backendURL = config.backendURL;

  const projects = await fetch(`${backendURL}/products?limit=2`, {
    method: "get",
  });
  const response = await projects.json();
  return response.products;
}
export default async function Home() {
  const productResponse = await fetchProducts();
  return (
    <main className="relative flex flex-col z-[999] items-center pt-[10rem]">
      <div className="text-white">🔥 Special Offers</div>
      {/* this is for card */}
      <div className="mt-12 flex flex-col gap-10">
        {/* <AnimatePresence initial={false}> */}
          {productResponse?.map((product: any, index: any) => {
            return (
              <ProductCards product={product} key={`${index}_${product.id}`} />
            );
          })}
        {/* </AnimatePresence> */}
      </div>
    </main>
  );
}
