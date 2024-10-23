import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";

const ProductDetails = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  // Add showCheckout state
  const [showCheckout, setShowCheckout] = useState(false);
  // Add form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    cardNumber: "",
  });

  const [currentImage, setCurrentImage] = useState(product?.productImage);
  const [totalPrice, setTotalPrice] = useState(product?.price || 0);
  const cartItemAmount = cartItems[product?.id] || 0;

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * cartItemAmount);
    }
  }, [cartItemAmount, product]);

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  // Add form input handler
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add order submit handler
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    alert(
      `Order placed successfully! Total: $${(totalPrice + 9.99).toFixed(2)}`
    );
    console.log("Order details:", formData);
    setShowCheckout(false);
  };

  return (
    <div className="container mx-auto px-4 py-28">
      {!showCheckout ? (
        // Product Details View
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-1/2 md:pr-8">
            <img
              src={currentImage}
              alt={product.productName}
              className="w-full rounded-lg shadow-lg object-cover aspect-square"
            />
            <div className="flex mt-4 space-x-4">
              {[
                product.productImage,
                product.imgDetail1,
                product.imgDetail2,
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className={`w-20 h-20 rounded-md cursor-pointer object-cover transition-opacity ${
                    currentImage === img
                      ? "ring-2 ring-black"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setCurrentImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
            <p className="text-gray-600 mb-6">{product.specs}</p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Unit Price:</span>
                <span className="text-xl font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="mr-4 text-lg font-semibold">Quantity:</span>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 px-4 py-2 rounded-l hover:bg-gray-300 transition-colors"
                    onClick={() => removeFromCart(product.id)}
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
                        updateCartItemCount(value, product.id);
                      }
                    }}
                  />
                  <button
                    className="bg-gray-200 px-4 py-2 rounded-r hover:bg-gray-300 transition-colors"
                    onClick={() => addToCart(product.id)}
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
                className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-gray-100 transition-colors relative group"
                onClick={() => addToCart(product.id)}
              >
                <span className="relative z-10">ADD TO CART</span>
                {cartItemAmount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemAmount}
                  </span>
                )}
              </button>
              <button
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
                onClick={() => setShowCheckout(true)} // Add click handler here
              >
                BUY NOW
              </button>
            </div>

            <div className="mt-8 space-y-2 border-t pt-6">
              <p className="flex items-center">
                <strong className="w-24">Texture:</strong>
                <span>{product.texture}</span>
              </p>
              <p className="flex items-center">
                <strong className="w-24">Weight:</strong>
                <span>{product.weight}</span>
              </p>
              <p className="flex items-center">
                <strong className="w-24">Size:</strong>
                <span>{product.size}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Checkout Form View
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <button
            onClick={() => setShowCheckout(false)}
            className="mb-6 text-blue-600 hover:text-blue-800"
          >
            ← Back to Product
          </button>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Checkout
          </h1>

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
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$9.99</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${(totalPrice + 9.99).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-300 mt-6"
            >
              Place Order ${(totalPrice + 9.99).toFixed(2)}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
