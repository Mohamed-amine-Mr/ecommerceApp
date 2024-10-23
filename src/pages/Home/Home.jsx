import { Link } from "react-router-dom";
import livecomfor from "../../assets/imgs/home.jpg";
import electronics from "../../assets/imgs/electron.jpg";
import skinCare from "../../assets/imgs/skin.jpg";
import kitchen from "../../assets/imgs/kitchen.jpg";
import {
  ComfortableSec,
  Creativeprod,
  ProudProducts,
  Trending,
} from "../pages";
import { Footer } from "../../components/components";
const Home = () => {
  return (
    <>
      <div
        className="min-h-screen bg-gray-100 pt-40 lg:pt-1 mb-10 lg:mb-52"
        id="home"
      >
        <div className="container mx-auto  lg:px-8 h-[calc(100vh-18.5rem)]  lg:h-[calc(100vh-13.5rem)] ">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-1 h-full">
            <div className="col-span-1 lg:col-span-6 group">
              <Link to="/categories/furnitures" className="block h-full">
                <div className="relative bg-black/50 h-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl">
                  <img
                    src={livecomfor}
                    alt="Live Comfortably"
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-end pb-6 pl-1 lg:p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-base lg:text-xl font-semibold">
                      Live Comfortably
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-1 lg:col-span-3 group">
              <Link to="/categories/skincare" className="block h-full">
                <div className="relative h-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl">
                  <img
                    src={skinCare}
                    alt="Skincare"
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-end pb-6 pl-6 lg:p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-base lg:text-xl font-semibold">
                      Skincare
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-2 lg:col-span-3 flex flex-col gap-1 h-full">
              <div className="group flex-1">
                <Link to="/categories/kitchen" className="block h-full">
                  <div className="relative h-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl">
                    <img
                      src={kitchen}
                      alt="Kitchen"
                      className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex items-end pb-6 pl-6 lg:p-6 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white text-base lg:text-xl font-semibold">
                        Kitchen
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="group flex-1">
                <Link to="/categories/electronics" className="block h-full">
                  <div className="relative h-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl">
                    <img
                      src={electronics}
                      alt="Electronics"
                      className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex items-end pb-6 pl-6 lg:p-6 bg-gradient-to-t from-black/70 to-transparent ">
                      <p className="text-white text-base lg:text-xl font-semibold">
                        Electronics
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProudProducts />
      <Creativeprod />
      <Trending />
      <ComfortableSec />
      <Footer />
    </>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <>
//       <div className="bg-gray-100 pt-40  pb-12" id="home">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-4 lg:grid-cols-12 gap-1 ">
//             <div className="col-span-1 lg:col-span-6 group">
//               <Link to="/categories/furnitures" className="block h-full">
//                 <div className="relative bg-black/50 h-full lg:h-[calc(100vh-12rem)] overflow-hidden  shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl">
//                   <img
//                     src={livecomfor}
//                     alt="Live Comfortably"
//                     className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
//                   />
//                   <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 to-transparent">
//                     <p className="text-white text-base lg:text-xl font-semibold ">
//                       Live Comfortably
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>

//             <div className="col-span-1 lg:col-span-3 group">
//               <Link to="/categories/skincare" className="block h-full">
//                 <div className="relative h-full lg:h-[calc(100vh-12rem)] overflow-hidden  shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl">
//                   <img
//                     src={skinCare}
//                     alt="Skincare"
//                     className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
//                   />
//                   <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 to-transparent">
//                     <p className="text-white text-base lg:text-xl font-semibold ">
//                       Skincare
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>

//             <div className="col-span-2 lg:col-span-3 flex flex-col gap-1  h-full">
//               <div className="group flex-1">
//                 <Link to="/categories/kitchen" className="block h-full">
//                   <div className="relative h-full overflow-hidden  shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl">
//                     <img
//                       src={kitchen}
//                       alt="Kitchen"
//                       className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
//                     />
//                     <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 to-transparent">
//                       <p className="text-white text-base lg:text-xl font-semibold ">
//                         Kitchen
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>

//               <div className="group flex-1">
//                 <Link to="/categories/electronics" className="block h-full">
//                   <div className="relative h-full overflow-hidden  shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl">
//                     <img
//                       src={electronics}
//                       alt="Electronics"
//                       className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
//                     />
//                     <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 to-transparent">
//                       <p className="text-white text-base lg:text-xl font-semibold ">
//                         Electronics
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ProudProducts />
//       <Creativeprod />
//       <Trending />
//       <ComfortableSec />
//       <Footer />
//     </>
//   );
// };

// export default Home;
