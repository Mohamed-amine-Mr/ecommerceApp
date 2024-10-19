import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import logo from "../../assets/imgs/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-24 w-auto" />
          </Link>

          <div className=" flex items-center space-x-8">
            <Link
              to="/categories/all"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              CATEGORIES
            </Link>
            <Link
              to="/productDetails"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              PRODUCT DETAILS
            </Link>

            <Link
              to="/cart"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              <ShoppingCart size={24} />
            </Link>
          </div>

          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <button className="text-gray-800 hover:text-blue-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      {/* <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/categories/all"
            className="block px-3 py-2 text-gray-800 hover:text-blue-600 transition duration-300"
          >
            CATEGORIES
          </Link>
          <Link
            to="/cart"
            className="block px-3 py-2 text-gray-800 hover:text-blue-600 transition duration-300"
          >
            <ShoppingCart size={24} className="inline mr-2" /> Cart
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
