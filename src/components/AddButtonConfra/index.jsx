import { useContext } from "react";
import { Button } from "../../pages/Home/styled";
import { ConfraContext } from "../../providers/confra";
import { ProductContext } from "../../providers/products";

export const AddButtonConfra = ({ item }) => {
  const { removeFromProducts } = useContext(ProductContext);
  const { addToConfra } = useContext(ConfraContext);

  const handleClick = () => {
    addToConfra(item);
    removeFromProducts(item);
  };

  return <Button onClick={handleClick}>Add to Confra</Button>;
};
