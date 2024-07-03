import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20419416/pexels-photo-20419416/free-photo-of-camera-in-red-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <p className="text-sm text-gray-500">My description</p>
        <button className="rounded-2xl w-max ring-1 ring-redis text-redis py-1 px-4 text-sm hover:bg-redis hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/test" className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20419416/pexels-photo-20419416/free-photo-of-camera-in-red-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <p className="text-sm text-gray-500">My description</p>
        <button className="rounded-2xl w-max ring-1 ring-redis text-redis py-1 px-4 text-sm hover:bg-redis hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/test" className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20419416/pexels-photo-20419416/free-photo-of-camera-in-red-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <p className="text-sm text-gray-500">My description</p>
        <button className="rounded-2xl w-max ring-1 ring-redis text-redis py-1 px-4 text-sm hover:bg-redis hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/test" className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20419416/pexels-photo-20419416/free-photo-of-camera-in-red-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <p className="text-sm text-gray-500">My description</p>
        <button className="rounded-2xl w-max ring-1 ring-redis text-redis py-1 px-4 text-sm hover:bg-redis hover:text-white">Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
