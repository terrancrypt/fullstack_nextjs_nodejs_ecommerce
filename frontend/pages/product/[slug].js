import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import RelatedProduct from "@/components/RelatedProduct";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-20 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailCarousel />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            <div className="text-lg font-semibold mb-5">Men's Golf Shoes</div>
            <div className="text-lg font-semibold">$95</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              (Also includes all applicable duties)
            </div>
            <div>
              <div className="mb-10">
                <div className="flex justify-between mb-2">
                  <div className="text-md font-semibold">Select Size</div>
                  <div className="text-md font-medium text-black/[0.5]">
                    Select Size
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6.5
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 7
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 7.5
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 8
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 8.5
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 9
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 9.5
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 10
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 10.5
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                    UK 11
                  </div>
                </div>
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              </div>
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Add to Cart
              </button>
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
              <div>
                <div className="text-lg font-bold mb-5">Product Detail</div>
                <div className="text-md mb-5">
                "3 + 1 = a whole new icon. Celebrating 35 years of the Air Jordan 3, these kicks combine the classic AJ1 silhouette with an original AJ3 colourway. Crafted to the '85 specs, it's got premium leather, a high-top collar and the woven tongue label you know and love. Bold splashes of True Blue throughout (check out the Wings logo) stand out against layers of white and Cement Grey. And the finishing touch? Nike Air cushioning underfoot lets you keep pace, so nothing holds you back from stepping out in style.
                </div>
                <div className="text-md mb-5">
                "3 + 1 = a whole new icon. Celebrating 35 years of the Air Jordan 3, these kicks combine the classic AJ1 silhouette with an original AJ3 colourway. Crafted to the '85 specs, it's got premium leather, a high-top collar and the woven tongue label you know and love. Bold splashes of True Blue throughout (check out the Wings logo) stand out against layers of white and Cement Grey. And the finishing touch? Nike Air cushioning underfoot lets you keep pace, so nothing holds you back from stepping out in style.
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedProduct/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
