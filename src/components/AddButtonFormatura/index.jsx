import { useContext } from "react";
import { Button } from "../../pages/Home/styled";
import { FormaturaContext } from "../../providers/formatura";
import { ProductContext } from "../../providers/products";

export const AddButtonFormatura = ({ item }) => {
  const { removeFromProducts } = useContext(ProductContext);
  const { addToFormatura } = useContext(FormaturaContext);

  const handleClick = () => {
    addToFormatura(item);
    removeFromProducts(item);
  };

  return <Button onClick={handleClick}>Add to Formatura</Button>;
};
