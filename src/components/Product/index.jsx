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
    <li key={id}>
      <h3>{name}</h3>
      <img src={image_url} alt={name}></img>
      <p>Descrição:{description}</p>
      <p>Início da Fabricação:{first_brewed}</p>
      <p>Litros:{value}</p>
      {!isRemovable ? (
        <>
          <AddButtonCasamento item={item} />
          <AddButtonConfra item={item} />
          <AddButtonFormatura item={item} />
        </>
      ) : (
        <RemoveButton item={item}></RemoveButton>
      )}
    </li>
  );
};
export default Product;
