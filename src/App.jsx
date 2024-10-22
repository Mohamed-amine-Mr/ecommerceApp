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
  ProductPageList,
  SkinCareInfo,
  ClothesInfo,
  FurnituresInfo,
  LampsInfo,
  ChairsInfo,
  ElectronicsInfo,
  AllProductInfo,
  Kitchen,
  KitchenInfo,
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
            <Route path="/categories/kitchen" element={<Kitchen />} />
            <Route path="/categories/chairs" element={<ChairsCatego />} />
            <Route path="/categories/all" element={<CategoriesAll />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/productPage" element={<ProductPageList />} />
            <Route path="/productPage/clothesInfo" element={<ClothesInfo />} />
            <Route path="/productPage/kitchenInfo" element={<KitchenInfo />} />
            <Route
              path="/productPage/furnituresInfo"
              element={<FurnituresInfo />}
            />
            <Route path="/productPage/lampsInfo" element={<LampsInfo />} />
            <Route path="/productPage/chairsInfo" element={<ChairsInfo />} />
            <Route
              path="/productPage/electronicsInfo"
              element={<ElectronicsInfo />}
            />
            ,{/*  */}
            <Route
              path="/productPage/skinCareInfo"
              element={<SkinCareInfo />}
            />
            <Route
              path="/productPage/allProductInfo"
              element={<AllProductInfo />}
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
