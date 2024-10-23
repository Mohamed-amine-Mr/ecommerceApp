import { PRODUCTS } from "../../products";
import { CategoryInfo, ProductPage } from "../components";

const SkinCareInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "skin-care");

  return (
    <>
      <CategoryInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default SkinCareInfo;
