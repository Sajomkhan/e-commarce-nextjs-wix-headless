import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="layout mt-24">
        <h2 className="mb-12">Featured Products</h2>
        <ProductList />
      </div>
      <div className="mt-24 px-4">
        <h2 className="layout mb-12">Categories</h2>
        <CategoryList />
      </div>
      <div className="layout my-24 px-4">
        <h2 className="mb-12">New Products</h2>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
