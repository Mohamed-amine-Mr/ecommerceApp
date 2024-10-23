import { useState, useRef } from "react";
import { Play } from "lucide-react";
import video from "./addVideo.mp4";
import { Link } from "react-router-dom";

const Creativeprod = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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

          {/* video side */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <video
                ref={videoRef}
                src={video}
                className="w-full h-auto object-cover cursor-pointer"
                onClick={handleVideoClick}
              />
              {!isPlaying && (
                <Play
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 cursor-pointer"
                  size={40}
                  onClick={handleVideoClick}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creativeprod;
