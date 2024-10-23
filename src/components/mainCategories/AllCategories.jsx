import { PRODUCTS } from "../../products";
import { Categories } from "../components";
import { Product } from "../../features/shop/product"; // Use the Product component

const AllCategories = () => {
  return (
    <>
      <Categories />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCategories;
