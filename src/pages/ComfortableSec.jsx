import imgComftbl from "../assets/imgs/comfotabeliniving.jpg";
import { Link } from "react-router-dom";

const ComfortableSec = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          {/* Image side */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <img
                src={imgComftbl}
                alt="Comfortable living"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg"></div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comfortable &amp; Elegante Living
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <Link to="/categories/all">
              <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComfortableSec;
