import { PRODUCTS } from "../../products";
import { CategorieInfo, ProductPage } from "../components";

const LampsInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "lamp");

  return (
    <>
      <CategorieInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default LampsInfo;
