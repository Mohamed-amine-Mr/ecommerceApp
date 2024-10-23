import { PRODUCTS } from "../../products";
import { CategorieInfo, ProductPage } from "../components";

const ElectronicsInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "electronic");

  return (
    <>
      <CategorieInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default ElectronicsInfo;
