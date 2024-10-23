import { PRODUCTS } from "../../products";
import { CategorieInfo, ProductPage } from "../components";

const ChairsInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "chair");

  return (
    <>
      <CategorieInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default ChairsInfo;
