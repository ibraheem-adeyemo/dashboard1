import React from "react";
import Image from "next/image";
import { StarRating } from "../StarRating";
import { ProductListingProps } from "@/types/data.type";

export const ProductCard = ({ product }: { product: ProductListingProps }) => {
  const {
    image,
    name,
    price,
    sku,
    description,
    status,
    ratings,
    allOders,
    successfulOrder,
  } = product;

  return (
    <div className="bg-[#1e1f25] p-5 rounded-xl border border-[var(--neutral-border)] flex flex-col space-y-3 w-full">
      {/* Product Image */}
      <div className="flex flex-row justify-between">
        <div className="w-16 h-16 border border-[var(--neutral-border)] rounded-lg">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div>
          <div>
            <h2 className="font-semibold text-sm">{name}</h2>
            <StarRating rating={ratings} />
          </div>
          <p className="font-semibold text-text-secondary text-md">{price}</p>
        </div>
      </div>

      {/* Price + SKU */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">{sku}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-snug">
        {description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
      </p>

      {/* Status + Orders */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <span className="capitalize text-sm">{status}</span>
        </div>
        <p className="text-sm text-gray-400">
          {successfulOrder} / {allOders}
        </p>
      </div>
    </div>
  );
};
