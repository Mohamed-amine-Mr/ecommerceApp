import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { removeFromCart, addToCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div
      id="cartItem"
      className="flex items-center border-b border-gray-200 py-6 last:border-b-0"
    >
      <img
        src={productImage}
        alt={productName}
        className="w-32 h-32 object-cover rounded-lg shadow-md mr-6 transition-transform duration-300 hover:scale-105"
      />
      <div id="description" className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{productName}</h3>
        <p className="text-lg font-semibold text-green-600 mb-4">
          ${price.toFixed(2)}
        </p>
        <div id="countHandler" className="flex items-center space-x-4">
          <button
            onClick={() => removeFromCart(id)}
            className="w-8 h-8 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            -
          </button>
          <input
            value={cartItems[id]}
            className="w-12 h-8 text-center border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            onClick={() => addToCart(id)}
            className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
