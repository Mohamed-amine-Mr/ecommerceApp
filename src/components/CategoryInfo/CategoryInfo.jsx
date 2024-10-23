import { Link } from "react-router-dom";

const CategoryInfo = () => {
  const productDetailNavigation = [
    "All Product Info",
    "Furnitures Info",
    "Electronics Info",
    "Lamps Info",
    "Clothes Info",
    "Chairs Info",
    "SkinCare Info",
    "Kitchen Info",
  ];

  return (
    <div
      className="container mx-auto px-4 pt-40 sm:pt-56 md:pt-32 lg:pt-40"
      id="categories"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Link
            to="/"
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
            <span className="text-sm font-medium">Home</span>
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {productDetailNavigation.map((cat) => (
            <Link
              key={cat}
              to={`/productPage/${cat.toLowerCase().replace(" ", "").trim()}`}
            >
              <button
                className={`px-3 py-2 text-gray-800 rounded-md text-sm font-medium transition duration-300`}
              >
                {cat}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryInfo;
