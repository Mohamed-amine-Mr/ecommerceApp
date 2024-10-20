import { PRODUCTS } from "../../products";
import ProductPage from "./ProductPage";
const ProductPageList = () => {
  return (
    <>
      {PRODUCTS.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};
export default ProductPageList;
