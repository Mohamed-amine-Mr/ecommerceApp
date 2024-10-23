import { PRODUCTS } from "../../products";
import { CategoryInfo, ProductPage } from "../components";
const AllProductsInfo = () => {
  return (
    <>
      <CategoryInfo />
      {PRODUCTS.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default AllProductsInfo;
