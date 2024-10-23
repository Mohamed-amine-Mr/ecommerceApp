import { PRODUCTS } from "../../products";
import { CategoryInfo, ProductPage } from "../components";

const ChairsInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "chair");

  return (
    <>
      <CategoryInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default ChairsInfo;
