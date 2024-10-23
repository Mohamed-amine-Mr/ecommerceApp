import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgComftbl from "../../assets/imgs/creativeproducts.jpg";

import img2 from "../../assets/imgs/creativeproducts.jpg"; // Replace with your image path
import img3 from "../../assets/imgs/home.jpg"; // Replace with your image path
import img4 from "../../assets/imgs/comfotabeliniving.jpg"; // Replace with your image path
import "./ComfortableSec.css";
const ComfortableSection = () => {
  const images = [imgComftbl, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-20 sm:py-28">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Image side */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img
                  src={images[currentImageIndex]}
                  alt="Comfortable living"
                  className="w-full h-[500px] object-cover transform transition-transform duration-1000"
                  style={{
                    animation: "fadeIn 1s ease-in-out",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? "w-6 bg-white"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:w-1/2 lg:pr-12">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                <span className="block mb-2 text-blue-600">Comfortable</span>
                <span className="block">&amp; Elegante Living</span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                RAOUF Products are all made to standard sizes so that you can
                mix and match them freely.
              </p>

              <Link to="/categories/all">
                <button className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  <span className="mr-2">Shop now</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComfortableSection;
