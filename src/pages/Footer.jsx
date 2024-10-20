import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-700 pb-12">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400">
              Get the latest updates on new products and upcoming sales
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-64 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/categories/all"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/furniture"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/electronics"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/clothing"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Clothing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2023 Your E-commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
