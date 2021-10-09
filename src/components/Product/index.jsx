import { Buttons, Card } from "../../pages/Home/styled";
import { AddButtonCasamento } from "../AddButtonCasamento";
import { AddButtonConfra } from "../AddButtonConfra";
import { AddButtonFormatura } from "../AddButtonFormatura";
import { RemoveButton } from "../RemoveButton";

const Product = ({
  item,
  item: {
    name,
    description,
    image_url,
    id,
    first_brewed,
    volume: { value },
  },
  isRemovable,
}) => {
  return (
    <Card key={id}>
      <h3>{name}</h3>
      <img src={image_url} alt={name}></img>
      <p>Descrição: {description.substr(0, 70)}...</p>
      <p>Início da Fabricação: {first_brewed}</p>
      <p>Litros: {value}</p>
      {!isRemovable ? (
        <Buttons>
          <AddButtonCasamento item={item} />
          <AddButtonConfra item={item} />
          <AddButtonFormatura item={item} />
        </Buttons>
      ) : (
        <Buttons>
          <RemoveButton item={item}></RemoveButton>
        </Buttons>
      )}
    </Card>
  );
};
export default Product;
