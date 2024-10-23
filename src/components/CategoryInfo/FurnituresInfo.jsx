import { PRODUCTS } from "../../products";
import { CategorieInfo, ProductPage } from "../components";

const FurnituresInfo = () => {
  const fil = PRODUCTS.filter((product) => product.category === "furniture");

  return (
    <>
      <CategorieInfo />
      {fil.map((detail) => (
        <ProductPage detail={detail} key={detail.id} />
      ))}
    </>
  );
};

export default FurnituresInfo;
