import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link href="product/1">
      <img className="w-full" src="/product-1.webp" alt="Product Image" />
      <div className="p-4 text-black/[0.9]">
        <h2>Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">$20.00</p>
            <p className="text-base font-medium line-through">
                $25.00
            </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
