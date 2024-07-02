"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
    // {
    //   id: 2,
    //   title: "Winter Sale Collections",
    //   description: "Sale! Up to 50% off!",
    //   img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   url: "/",
    //   bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    // },
    // {
    //   id: 3,
    //   title: "Spring Sale Collections",
    //   description: "Sale! Up to 50% off!",
    //   img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   url: "/",
    //   bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    // },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-var(--nav-height))] overflow-hidden">
      <div className="w-full h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-full h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 w-full xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link href="/">
                <button className="rounded-md bg-black text-white py-3 px-4 ">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 w-full xl:w-1/2 xl:h-full">
              <Image
                src={slide.img}
                alt=""
                width={500}
                height={650}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
