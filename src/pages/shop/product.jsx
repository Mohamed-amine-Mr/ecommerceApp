import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

export const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div
      id="product"
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img
            src={productImage}
            alt={productName}
            className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
          New
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl mb-2 text-gray-800 line-clamp-2 text-center">
          {productName}
        </h3>
        <p className="text-green-600 font-bold text-2xl mb-4 text-center">
          ${price.toFixed(2)}
        </p>
      </div>
      <button
        className="w-full py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
        onClick={() => addToCart(id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <span>
          Add To Cart{" "}
          {cartItemAmount > 0 && (
            <span className="ml-1 bg-white text-blue-600 px-2 py-1 rounded-full text-xs">
              ({cartItemAmount})
            </span>
          )}
        </span>
      </button>
    </div>
  );
};
