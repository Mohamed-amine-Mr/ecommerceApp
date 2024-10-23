import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./features/cart/cart.jsx";

import { ShopContextProvider } from "./context/shop-context.jsx";
import { Home } from "./pages/pages.jsx";
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
  SkinCareInfo,
  ClothesInfo,
  FurnituresInfo,
  LampsInfo,
  ChairsInfo,
  ElectronicsInfo,
  AllProductInfo,
  Kitchen,
  KitchenInfo,
  ScrollToTop,
  ProductPageList,
} from "./components/components.jsx";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <ScrollToTop />

          <Routes>
            <Route path="/categories/:category" element={<Categories />} />
            <Route path="/" element=<Home /> />
            <Route path="/cart" element=<Cart /> />
            {/* <Route path="/cart/checkoutPage" element={<CheckoutPage />} /> */}
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
            <Route path="/productPage" element={<ProductPageList />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
