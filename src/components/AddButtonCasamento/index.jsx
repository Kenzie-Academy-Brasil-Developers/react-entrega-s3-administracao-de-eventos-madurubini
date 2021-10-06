import { useContext } from "react";
import { CasamentoContext } from "../../providers/casamento";
import { ProductContext } from "../../providers/products";

export const AddButtonCasamento = ({ item }) => {
  const { removeFromProducts } = useContext(ProductContext);
  const { addToCasamento } = useContext(CasamentoContext);

  const handleClick = () => {
    addToCasamento(item);
    removeFromProducts(item);
  };

  return <button onClick={handleClick}>Add to Casamento</button>;
};
