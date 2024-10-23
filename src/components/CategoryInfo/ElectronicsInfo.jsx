import { PRODUCTS } from "../../products";
import { CategoryInfo, ProductPage } from "../components";

const ElectronicsInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "electronic");

  return (
    <>
      <CategoryInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default ElectronicsInfo;
