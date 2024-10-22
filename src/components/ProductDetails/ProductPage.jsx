// // import { PRODUCTS } from "../../products";
// import { ShopContext } from "../../context/shop-context";
// import { useContext } from "react";

// const ProductPage = ({ detail }) => {
//   const { id, addToCart, cartItems, removeFromCart, updateCartItemCount } =
//     useContext(ShopContext);
//   return (
//     <>
//       <div className="container mx-auto px-4 py-28">
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 lg:w-1/2 md:pr-8">
//             <img
//               src={detail.productImage}
//               alt={detail.productName}
//               className="w-full rounded-lg shadow-lg"
//             />
//             <div className="flex mt-4 space-x-4">
//               <img
//                 src={detail.imgDetail1}
//                 alt="Detail 1"
//                 className="w-20 h-20 rounded-md cursor-pointer"
//               />
//               <img
//                 src={detail.imgDetail2}
//                 alt="Detail 2"
//                 className="w-20 h-20 rounded-md cursor-pointer"
//               />
//             </div>
//           </div>
//           <div className="md:w-1/2 lg:w-1/2 md:pl-8 mt-8 md:mt-0">
//             <h1 className="text-3xl font-bold mb-4">{detail.productName}</h1>
//             <p className="text-gray-600 mb-6">{detail.specs}</p>

//             <div className="flex items-center mb-6">
//               <span className="mr-4">Quantity</span>
//               <button
//                 className="bg-gray-200 px-3 py-1 rounded-l"
//                 onClick={() => removeFromCart(id)}
//               >
//                 -
//               </button>
//               <input
//                 value={cartItems[id]}
//                 type="text"
//                 defaultValue="1"
//                 className="w-12 text-center border-t border-b border-gray-200"
//                 onChange={(e) =>
//                   updateCartItemCount(Number(e.target.value), id)
//                 }
//               />
//               <button
//                 className="bg-gray-200 px-3 py-1 rounded-r"
//                 onClick={() => addToCart(id)}
//               >
//                 +
//               </button>
//             </div>

//             <p className="text-2xl font-bold mb-6">
//               ${detail.price.toFixed(2)}
//             </p>

//             <div className="flex space-x-4">
//               <button
//                 className="bg-white text-black border border-black px-6 py-2 rounded"
//                 onClick={() => addToCart(id)}
//               >
//                 ADD TO CART
//               </button>
//               <button className="bg-red-600 text-white px-6 py-2 rounded">
//                 BUY NOW
//               </button>
//             </div>

//             <div className="mt-8">
//               <p>
//                 <strong>Texture:</strong> {detail.texture}
//               </p>
//               <p>
//                 <strong>Weight:</strong> {detail.weight}
//               </p>
//               <p>
//                 <strong>Size:</strong> {detail.size}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ProductPage;
import { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";

const ProductPage = ({ detail }) => {
  const { id, addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  // State to track the currently displayed image
  const [currentImage, setCurrentImage] = useState(detail.productImage);

  return (
    <>
      <div className="container mx-auto px-4 py-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-1/2 md:pr-8">
            <img
              src={currentImage}
              alt={detail.productName}
              className="w-full rounded-lg shadow-lg object-cover aspect-square"
            />
            <div className="flex mt-4 space-x-4">
              <img
                src={detail.productImage}
                alt="Main"
                className={`w-20 h-20 rounded-md cursor-pointer object-cover transition-opacity ${
                  currentImage === detail.productImage
                    ? "ring-2 ring-black"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(detail.productImage)}
              />
              <img
                src={detail.imgDetail1}
                alt="Detail 1"
                className={`w-20 h-20 rounded-md cursor-pointer object-cover transition-opacity ${
                  currentImage === detail.imgDetail1
                    ? "ring-2 ring-black"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(detail.imgDetail1)}
              />
              <img
                src={detail.imgDetail2}
                alt="Detail 2"
                className={`w-20 h-20 rounded-md cursor-pointer object-cover transition-opacity ${
                  currentImage === detail.imgDetail2
                    ? "ring-2 ring-black"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(detail.imgDetail2)}
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{detail.productName}</h1>
            <p className="text-gray-600 mb-6">{detail.specs}</p>

            <div className="flex items-center mb-6">
              <span className="mr-4">Quantity</span>
              <button
                className="bg-gray-200 px-3 py-1 rounded-l"
                onClick={() => removeFromCart(id)}
              >
                -
              </button>
              <input
                value={cartItems[id]}
                type="text"
                className="w-12 text-center border-t border-b border-gray-200"
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button
                className="bg-gray-200 px-3 py-1 rounded-r"
                onClick={() => addToCart(id)}
              >
                +
              </button>
            </div>

            <p className="text-2xl font-bold mb-6">
              ${detail.price.toFixed(2)}
            </p>

            <div className="flex space-x-4">
              <button
                className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-gray-100 transition-colors"
                onClick={() => addToCart(id)}
              >
                ADD TO CART
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
                BUY NOW
              </button>
            </div>

            <div className="mt-8">
              <p>
                <strong>Texture:</strong> {detail.texture}
              </p>
              <p>
                <strong>Weight:</strong> {detail.weight}
              </p>
              <p>
                <strong>Size:</strong> {detail.size}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
