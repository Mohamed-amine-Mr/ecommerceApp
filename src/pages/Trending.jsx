import { useState } from "react";
import { PRODUCTS } from "../products";
import { Product } from "./shop/product";

const Trending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const productsToShow = 2; // Number of products to display at once

  const scroll = (direction) => {
    if (direction === "left") {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setStartIndex((prev) =>
        Math.min(prev + 1, PRODUCTS.length - productsToShow)
      );
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Trending Products
            </h3>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:shadow-none disabled:hover:transform-none"
              title="scroll left"
              disabled={startIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:shadow-none disabled:hover:transform-none"
              title="scroll right"
              disabled={startIndex >= PRODUCTS.length - productsToShow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg p-6">
          <div className="flex transition-transform duration-500 ease-out space-x-6">
            {PRODUCTS.slice(startIndex, startIndex + productsToShow).map(
              (prod) => (
                <div
                  key={prod.id}
                  className="flex-1 transform hover:scale-105 transition-duration-300"
                >
                  <Product data={prod} />
                </div>
              )
            )}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({
            length: Math.ceil(PRODUCTS.length - productsToShow + 1),
          }).map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === startIndex ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
