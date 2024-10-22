import { PRODUCTS } from "../../products";
import { CategorieInfo, ProductPage } from "../components";

const SkinCareInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "skin-care");

  return (
    <>
      <CategorieInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default SkinCareInfo;
