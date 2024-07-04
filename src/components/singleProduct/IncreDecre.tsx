"use client";

import { useState } from "react";

const IncreDecre = () => {
  const [quantity, setQuantity] = useState(1);

  // TEMPORARY
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-8">
          <div className="w-32 py-1 px-4 text-lg font-bold rounded-2xl flex items-center justify-between bg-gray-200">
            <button
              className="hover:text-redis text-[25px]"
              onClick={() => handleQuantity("d")}
              disabled={quantity===1}
            >
              -
            </button>
            {quantity}
            <button
              className="hover:text-redis text-[20px]"
              onClick={() => handleQuantity("i")}
              disabled={quantity===stock}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="font-semibold text-orange-500">4 items</span>{" "}
            left!
            <hr /> {"Don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm ring-1 rounded-md ring-redis text-redis py-2 px-4 hover:bg-redis hover:text-white disabled:cursor-not-allowed disabled:bg-pink-300 disabled:text-white disabled:ring-none transition-all duration-200">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default IncreDecre;
