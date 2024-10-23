import { PRODUCTS } from "../../products";
import { CategoryInfo, ProductPage } from "../components";

const ClothesInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "clothes");

  return (
    <>
      <CategoryInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default ClothesInfo;
