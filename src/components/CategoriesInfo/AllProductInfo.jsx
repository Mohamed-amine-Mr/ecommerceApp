import { PRODUCTS } from "../../products";
import { CategorieInfo, ProductPage } from "../components";
const AllProductInfo = () => {
  return (
    <>
      <CategorieInfo />
      {PRODUCTS.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default AllProductInfo;
