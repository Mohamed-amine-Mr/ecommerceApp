import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="h-96 bg-red-700">Product not found</div>;
  }
  return (
    <div className="container mx-auto px-4 py-28">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 lg:w-1/2 md:pr-8">
          <img
            src={product.productImage}
            alt={product.productName}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="flex mt-4 space-x-4">
            <img
              src={product.imgDetail1}
              alt="Detail 1"
              className="w-20 h-20 rounded-md cursor-pointer"
            />

            <img
              src={product.imgDetail2}
              alt="Detail 3"
              className="w-20 h-20 rounded-md cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
          <p className="text-gray-600 mb-6">{product.specs}</p>

          <div className="flex items-center mb-6">
            <span className="mr-4">Quantity</span>
            <button className="bg-gray-200 px-3 py-1 rounded-l">-</button>
            <input
              type="text"
              defaultValue="1"
              className="w-12 text-center border-t border-b border-gray-200"
            />
            <button className="bg-gray-200 px-3 py-1 rounded-r">+</button>
          </div>

          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>

          <div className="flex space-x-4">
            <button className="bg-white text-black border border-black px-6 py-2 rounded">
              ADD TO CART
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded">
              BUY NOW
            </button>
          </div>

          <div className="mt-8">
            <p>
              <strong>Texture:</strong> {product.texture}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}
            </p>
            <p>
              <strong>Size:</strong> {product.size}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
