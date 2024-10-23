import { PRODUCTS } from "../../products";
import { CategoryInfo, ProductPage } from "../components";
const ProductPageList = () => {
  return (
    <>
      <CategoryInfo />
      {PRODUCTS.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};
export default ProductPageList;
