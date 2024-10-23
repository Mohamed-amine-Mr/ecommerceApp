import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext, useState } from "react";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    cardNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully! Total: $" + totalAmount.toFixed(2));
    console.log("Order details:", formData);
    setShowCheckout(false);
  };

  return (
    <div id="cart" className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            {showCheckout ? "Checkout" : "Your Cart"}
          </h1>

          {!showCheckout && totalAmount > 0 && (
            <>
              <div id="cartItems" className="space-y-6">
                {PRODUCTS.map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} key={product.id} />;
                  }
                })}
              </div>

              <div
                id="checkout"
                className="mt-12 bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <p className="text-2xl font-bold text-gray-800 mb-6">
                  Subtotal: ${totalAmount.toFixed(2)}
                </p>
                <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => navigate("/")}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-300"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}

          {showCheckout && (
            <div className="mt-6">
              <button
                onClick={() => setShowCheckout(false)}
                className="mb-6 text-blue-600 hover:text-blue-800"
              >
                ← Back to Cart
              </button>

              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="mt-6 bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>$9.99</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${(totalAmount + 9.99).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-300 mt-6"
                >
                  Place Order ${(totalAmount + 9.99).toFixed(2)}
                </button>
              </form>
            </div>
          )}
          {totalAmount === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-gray-500 mb-8">
                Looks like you haven&apos;t added any items to your cart yet.
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
