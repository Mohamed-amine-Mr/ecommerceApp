// import { Link, useParams } from "react-router-dom";

// const Categories = () => {
//   const { category } = useParams();

//   return (
//     <div
//       className="container mx-auto px-4 pt-16 sm:pt-24 md:pt-32 lg:pt-40"
//       id="categories"
//     >
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
//         <div className="flex items-center space-x-2 mb-4 md:mb-0">
//           <Link
//             to="/"
//             className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition duration-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5"
//             >
//               <path d="M15 6l-6 6l6 6"></path>
//             </svg>
//             <span className="text-sm font-medium">Home</span>
//           </Link>
//           <h3 className="text-lg font-semibold capitalize">
//             {category || "All"}
//           </h3>{" "}
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {[
//             "All",
//             "Furnitures",
//             "Electronics",
//             "Lamps",
//             "Clothes",
//             "Chairs",
//             "Skin Care",
//           ].map((category) => (
//             <Link
//               key={category}
//               to={`/categories/${category.toLowerCase().replace(" ", "")}`}
//             >
//               <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium transition duration-300">
//                 {category}
//               </button>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
import { Link } from "react-router-dom";

const Categories = () => {
  // List of categories
  const categoriesList = [
    "All",
    "Furnitures",
    "Electronics",
    "Lamps",
    "Clothes",
    "Chairs",
    "Skin Care",
  ];

  return (
    <div
      className="container mx-auto px-4 pt-16 sm:pt-24 md:pt-32 lg:pt-40"
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
          {categoriesList.map((cat) => (
            <Link
              key={cat}
              to={`/categories/${cat.toLowerCase().replace(" ", "")}`}
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

export default Categories;
