import { useContext } from "react";
import { ConfraContext } from "../../providers/confra";
import { ProductContext } from "../../providers/products";

export const AddButtonConfra = ({ item }) => {
  const { removeFromProducts } = useContext(ProductContext);
  const { addToConfra } = useContext(ConfraContext);

  const handleClick = () => {
    addToConfra(item);
    removeFromProducts(item);
  };

  return <button onClick={handleClick}>Add to Confra</button>;
};
