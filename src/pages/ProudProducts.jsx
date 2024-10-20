import { PRODUCTS } from "../products";
import { Product } from "./shop/product";
const ProudProducts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.slice(0, 6).map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProudProducts;
