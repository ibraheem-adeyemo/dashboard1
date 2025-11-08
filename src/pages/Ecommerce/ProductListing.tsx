"use client";

import React, { Fragment, useState } from "react";
import { ProductTable } from "./ProductTable";
import { products } from "@/utils/helpers";
import { ProductCard } from "@/components/ui/cards/ProductsCard";

const ProductListing = () => {
  const [display, setDisplay] = useState<"grid" | "list">("list");

  return (
    <div>
      <div className="flex justify-between my-10">
        <div>All Products</div>
        <div>
          <span
            className={`p-4 rounded-l-lg ${display === "list" ? "bg-[var(--color-brands)]" : "bg-surface-modal"}  cursor-pointer`}
            onClick={() => setDisplay("list")}
          >
            List
          </span>
          <span
            className={`p-4 rounded-r-lg ${display === "grid" ? "bg-[var(--color-brands)]" : "bg-surface-modal"} cursor-pointer`}
            onClick={() => setDisplay("grid")}
          >
            Grid
          </span>
        </div>
      </div>
      {display == "list" ? (
        <ProductTable data={products} isLoading={false} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
          {products.map((product, i) => {
            return (
              <Fragment key={i}>
                <ProductCard product={product} />
              </Fragment>
            );
          })}
        </div>
      )}
      <div>Products</div>;
    </div>
  );
};

export default ProductListing;
