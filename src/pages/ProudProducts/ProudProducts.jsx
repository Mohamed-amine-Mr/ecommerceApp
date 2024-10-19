import { PRODUCTS } from "../../products";
import { Product } from "../shop/product";
const ProudProducts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.slice(0, 6).map((product) => (
          // <div
          //   key={prod.id}
          //   id="product"
          //   className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          // >
          //   <div className="relative overflow-hidden">
          //     <Link to="/productDetails">
          //       <img
          //         src={prod.productImage}
          //         alt={prod.productName}
          //         className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
          //       />
          //     </Link>
          //     <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
          //       New
          //     </div>
          //   </div>
          //   <div className="p-6 flex-grow">
          //     <h3 className="font-bold text-xl mb-2 text-gray-800 line-clamp-2 text-center">
          //       {prod.productName}
          //     </h3>
          //   </div>
          // </div>
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProudProducts;
