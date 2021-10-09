import { useContext } from "react";
import { Button } from "../../pages/Home/styled";
import { CasamentoContext } from "../../providers/casamento";
import { ConfraContext } from "../../providers/confra";
import { FormaturaContext } from "../../providers/formatura";

export const RemoveButton = ({ item }) => {
  const { removeFromCasamento } = useContext(CasamentoContext);
  const { removeFromConfra } = useContext(ConfraContext);
  const { removeFromFormatura } = useContext(FormaturaContext);

  const handleClick = () => {
    removeFromCasamento(item);
    removeFromConfra(item);
    removeFromFormatura(item);
  };

  return <Button onClick={handleClick}>Remove</Button>;
};
