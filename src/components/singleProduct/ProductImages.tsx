"use client";

import Image from "next/image";
import { useState } from "react";
// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
// ];
const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/26547171/pexels-photo-26547171/free-photo-of-canadian-goose-by-the-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/16035532/pexels-photo-16035532/free-photo-of-camping-car-dans-la-nature-en-norvege-avec-un-ciel-bleu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/23698640/pexels-photo-23698640/free-photo-of-a-wind-turbine-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/4239547/pexels-photo-4239547.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="relative h-[500px]">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-10">
        {images.map((image, i) => (
          <div className="w-1/4 h-32 relative gap-4 cursor-pointer" key={image.id}
          onClick={()=>setIndex(i)}>
            <Image
              src={image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
