// import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import logo from "../assets/imgs/logo.png";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-3">
//           <Link to="/" className="flex items-center">
//             <img src={logo} alt="Logo" className="h-24 w-auto" />
//           </Link>

//           <div className=" flex items-center space-x-8">
//             <Link
//               to="/categories/all"
//               className="text-gray-800 hover:text-blue-600 transition duration-300"
//             >
//               CATEGORIES
//             </Link>
//             <Link
//               to="/productPage"
//               className="text-gray-800 hover:text-blue-600 transition duration-300"
//             >
//               PRODUCT PAGE
//             </Link>

//             <Link
//               to="/cart"
//               className="text-gray-800 hover:text-blue-600 transition duration-300"
//             >
//               <ShoppingCart size={24} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import logo from "../assets/imgs/logo.png";

const CartWithBadge = ({ itemCount = 0 }) => {
  return (
    <div className="relative">
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <div
          className="absolute -top-2 -right-2 bg-red-500 text-white 
                      rounded-full w-5 h-5 flex items-center justify-center
                      text-xs font-bold animate-bounce"
        >
          {itemCount > 99 ? "99+" : itemCount}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  // Calculate total items in cart
  const getTotalItemsInCart = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-24 w-auto" />
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/categories/all"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              CATEGORIES
            </Link>
            <Link
              to="/productPage"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              PRODUCT PAGE
            </Link>

            <Link
              to="/cart"
              className="text-gray-800 hover:text-blue-600 transition duration-300 relative"
            >
              <CartWithBadge itemCount={getTotalItemsInCart()} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
