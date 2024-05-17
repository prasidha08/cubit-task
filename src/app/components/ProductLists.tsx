import React from "react";
import ProductCards, { Product } from "./ProductCard";

function ProductLists({ products }: { products: Product[] }) {
  return (
    <>
      {products?.map((product: Product, index: number) => {
        return (
          <ProductCards product={product} key={`${index}_${product.id}`} />
        );
      })}
    </>
  );
}

export default ProductLists;
