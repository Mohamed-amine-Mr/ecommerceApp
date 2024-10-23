import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";

const ProductPage = ({ detail }) => {
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [currentImage, setCurrentImage] = useState(detail.productImage);
  const [totalPrice, setTotalPrice] = useState(detail.price);
  const cartItemAmount = cartItems[detail.id] || 0;
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    cardNumber: "",
  });

  useEffect(() => {
    setTotalPrice(detail.price * cartItemAmount);
  }, [cartItemAmount, detail.price]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    alert(`Order placed successfully! Total: $${totalPrice.toFixed(2)}`);
    console.log("Order details:", formData);
    setShowCheckout(false);
  };

  if (showCheckout) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Checkout</h2>
            <button
              onClick={() => setShowCheckout(false)}
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Product
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-medium">{detail.productName}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {cartItemAmount || 1}
                </p>
              </div>
              <p className="font-bold">${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          <form onSubmit={handleSubmitOrder} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shipping Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>

            <div className="border-t pt-4 mt-6">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${(totalPrice + 9.99).toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors mt-6"
            >
              Place Order ${(totalPrice + 9.99).toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 pb-36 lg:py-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-1/2 md:pr-8">
            <img
              src={currentImage}
              alt={detail.productName}
              className="w-full rounded-lg shadow-lg object-cover aspect-square"
            />
            <div className="flex mt-4 space-x-4">
              <img
                src={detail.productImage}
                alt="Main"
                className={`w-20 h-20 rounded-md cursor-pointer object-cover transition-opacity ${
                  currentImage === detail.productImage
                    ? "ring-2 ring-black"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(detail.productImage)}
              />
              <img
                src={detail.imgDetail1}
                alt="Detail 1"
                className={`w-20 h-20 rounded-md cursor-pointer object-cover transition-opacity ${
                  currentImage === detail.imgDetail1
                    ? "ring-2 ring-black"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(detail.imgDetail1)}
              />
              <img
                src={detail.imgDetail2}
                alt="Detail 2"
                className={`w-20 h-20 rounded-md cursor-pointer object-cover transition-opacity ${
                  currentImage === detail.imgDetail2
                    ? "ring-2 ring-black"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(detail.imgDetail2)}
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{detail.productName}</h1>
            <p className="text-gray-600 mb-6">{detail.specs}</p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Unit Price:</span>
                <span className="text-xl font-bold text-gray-800">
                  ${detail.price.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="mr-4 text-lg font-semibold">Quantity:</span>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 px-4 py-2 rounded-l hover:bg-gray-300 transition-colors"
                    onClick={() => removeFromCart(detail.id)}
                  >
                    -
                  </button>
                  <input
                    value={cartItemAmount}
                    type="number"
                    min="0"
                    className="w-16 text-center border-t border-b border-gray-200 py-2 focus:outline-none focus:border-gray-400"
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 0) {
                        updateCartItemCount(value, detail.id);
                      }
                    }}
                  />
                  <button
                    className="bg-gray-200 px-4 py-2 rounded-r hover:bg-gray-300 transition-colors"
                    onClick={() => addToCart(detail.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 bg-gray-50 rounded-lg mb-6">
                <span className="text-lg font-semibold">Total Price:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-gray-300 transition-colors relative group"
                onClick={() => addToCart(detail.id)}
              >
                <span className="relative z-10">ADD TO CART</span>
                {cartItemAmount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemAmount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setShowCheckout(true)}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
              >
                BUY NOW
              </button>
            </div>

            <div className="mt-8 space-y-2 border-t pt-6">
              <p className="flex items-center">
                <strong className="w-24">Texture:</strong>
                <span>{detail.texture}</span>
              </p>
              <p className="flex items-center">
                <strong className="w-24">Weight:</strong>
                <span>{detail.weight}</span>
              </p>
              <p className="flex items-center">
                <strong className="w-24">Size:</strong>
                <span>{detail.size}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
