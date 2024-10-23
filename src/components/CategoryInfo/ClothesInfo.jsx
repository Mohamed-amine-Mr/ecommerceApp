import { PRODUCTS } from "../../products";
import { CategorieInfo, ProductPage } from "../components";

const ClothesInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "clothes");

  return (
    <>
      <CategorieInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default ClothesInfo;
