import { PRODUCTS } from "../../products";
import { CategorieInfo, ProductPage } from "../components";
const ProductPageList = () => {
  return (
    <>
      <CategorieInfo />
      {PRODUCTS.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};
export default ProductPageList;
