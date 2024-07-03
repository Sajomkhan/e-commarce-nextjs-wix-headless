import Image from "next/image";
import Link from "next/link";

const demyArray = [1, 1, 1, 1, 1, 1, 1, 1];

const CategoryList = () => {
  return (
    <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
      {demyArray.map((item, index) => (
        <Link
          key={index}
          href="/list?cat=test"
          className="flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={300}
              height={350}
              className="object-cover h-full"
            />
          </div>

          <p className="mt-8 font-light text-xl tracking-wide">Category Name</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
