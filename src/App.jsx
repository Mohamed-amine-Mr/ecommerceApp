import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Home } from "./pages/pages";
import {
  Navbar,
  ElectrCatego,
  ClothesCatego,
  SkncarCatego,
  CategoriesAll,
  LampsCatego,
  FurnituresCatego,
  ChairsCatego,
  ProductDetails,
  Categories,
} from "./components/components.jsx";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/categories/:category" element={<Categories />} />

            <Route path="/" element=<Home /> />
            <Route path="/shop" element=<Shop /> />
            <Route path="/cart" element=<Cart /> />
            <Route path="/categories/electronics" element={<ElectrCatego />} />
            <Route path="/categories/clothes" element={<ClothesCatego />} />
            <Route path="/categories/skincare" element={<SkncarCatego />} />
            <Route
              path="/categories/furnitures"
              element={<FurnituresCatego />}
            />
            <Route path="/categories/lamps" element={<LampsCatego />} />
            <Route path="/categories/chairs" element={<ChairsCatego />} />
            <Route path="/categories/all" element={<CategoriesAll />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
