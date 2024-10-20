import creativeprod from "../assets/imgs/creativeproducts.jpg";
import { Link } from "react-router-dom";

const Creativeprod = () => {
  return (
    <div className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text side */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Creative harmonious living
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <Link to="/categories/all">
              <button className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Shop now
              </button>
            </Link>
          </div>

          {/* Image side */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={creativeprod}
                alt="Creative products"
                className="w-full h-auto object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creativeprod;
