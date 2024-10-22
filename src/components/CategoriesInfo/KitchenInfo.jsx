import { PRODUCTS } from "../../products";
import { CategorieInfo, ProductPage } from "../components";

const KitchenInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "kitchen");

  return (
    <>
      <CategorieInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default KitchenInfo;
