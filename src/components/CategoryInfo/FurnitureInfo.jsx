import { PRODUCTS } from "../../products";
import { CategoryInfo, ProductPage } from "../components";

const FurnitureInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "furniture");

  return (
    <>
      <CategoryInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default FurnitureInfo;
