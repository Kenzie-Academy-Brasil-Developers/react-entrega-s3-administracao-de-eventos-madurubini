import { useContext } from "react";
import { Button } from "../../pages/Home/styled";
import { CasamentoContext } from "../../providers/casamento";
import { ProductContext } from "../../providers/products";

export const AddButtonCasamento = ({ item }) => {
  const { removeFromProducts } = useContext(ProductContext);
  const { addToCasamento } = useContext(CasamentoContext);

  const handleClick = () => {
    addToCasamento(item);
    removeFromProducts(item);
  };

  return <Button onClick={handleClick}>Add to Casamento</Button>;
};
