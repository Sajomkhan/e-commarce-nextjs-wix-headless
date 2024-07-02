"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute top-12 right-0 flex flex-col gap-6 p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white ">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2>Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ================ Image and Image Text ================== */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/20419416/pexels-photo-20419416/free-photo-of-camera-in-red-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center justify-between gap-8">
                    <p className="font-semibold">Product Name</p>
                    <div className="p-1 bg-gray-100 rounded-md">$49</div>
                  </div>
                  <div className="text-sm text-gray-500">available</div>
                  <div className="flex justify-between text-sm mt-3">
                    <span>Qty: 2</span>
                    <button className="text-blue-500 hover:bg-slate-100 px-2 rounded-md">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/20419416/pexels-photo-20419416/free-photo-of-camera-in-red-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center justify-between gap-8">
                    <p className="font-semibold">Product Name</p>
                    <div className="p-1 bg-gray-100 rounded-md">$49</div>
                  </div>
                  <div className="text-sm text-gray-500">available</div>
                  <div className="flex justify-between text-sm mt-3">
                    <span>Qty: 2</span>
                    <button className="text-blue-500 hover:bg-slate-100 px-2 rounded-md">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Bottom ================== */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-2 px-4 ring-1 ring-gray-300 hover:bg-slate-100">
                View Cart
              </button>
              <button className="rounded-md py-2 px-4 bg-darkish text-lightish">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
