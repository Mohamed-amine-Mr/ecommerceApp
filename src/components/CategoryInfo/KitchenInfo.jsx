import { PRODUCTS } from "../../products";
import { CategoryInfo, ProductPage } from "../components";

const KitchenInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "kitchen");

  return (
    <>
      <CategoryInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default KitchenInfo;
