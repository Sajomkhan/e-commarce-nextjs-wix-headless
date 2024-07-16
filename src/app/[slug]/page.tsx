import CustomizeProduct from "@/components/singleProduct/CustomizeProduct";
import IncreDecre from "@/components/singleProduct/IncreDecre";
import ProductImages from "@/components/singleProduct/ProductImages";

const SinglePage = () => {
  return (
    <div className="layout flex flex-col lg:flex-row gap-16">
      {/* ============== IMAGE CONTAINER ============== */}
      <div className="w-full lg:w-1/2 lg:sticky top-[var(--nav-height)] h-max flex flex-col">
        <ProductImages />
      </div>
      {/* ============== TEXT CONTAINER ============== */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h3>Product Name</h3>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          praesentium distinctio aut, dolore quam corporis reiciendis ratione
          adipisci cumque dolor.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex gap-4">
          <h4 className="text-gray-400 text-xl font-semibold line-through">
            $59
          </h4>
          <h4 className="font-semibold text-xl ">$49</h4>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <IncreDecre />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h5 className="font-medium my-3">Title</h5>
          <p className="font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea minus cumque dolore facilis soluta amet nesciunt ab dolor accusantium nobis quisquam vel, neque eveniet odio aperiam expedita adipisci qui fugiat.</p>
          <h5 className="font-medium my-3">Title</h5>
          <p className="font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea minus cumque dolore facilis soluta amet nesciunt ab dolor accusantium nobis quisquam vel, neque eveniet odio aperiam expedita adipisci qui fugiat.</p>
          <h5 className="font-medium my-3">Title</h5>
          <p className="font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea minus cumque dolore facilis soluta amet nesciunt ab dolor accusantium nobis quisquam vel, neque eveniet odio aperiam expedita adipisci qui fugiat.</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
