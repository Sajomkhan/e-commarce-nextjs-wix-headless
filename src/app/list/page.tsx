import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="layout">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-redis text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-cover" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCT */}
      <h3 className="mt-10 mb-5">Shoes for you!</h3>
      <ProductList />

    </div>
  );
};

export default ListPage;
