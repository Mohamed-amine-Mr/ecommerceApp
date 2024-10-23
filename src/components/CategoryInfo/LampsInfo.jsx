import { PRODUCTS } from "../../products";
import { CategoryInfo, ProductPage } from "../components";

const LampsInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "lamp");

  return (
    <>
      <CategoryInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default LampsInfo;
