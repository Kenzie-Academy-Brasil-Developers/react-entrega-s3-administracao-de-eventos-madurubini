import { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import { CasamentoContext } from "../../providers/casamento";

const Casamento = () => {
  const { casamento } = useContext(CasamentoContext);

  return (
    <ul>
      <Link to="/">Home</Link>

      {casamento.map((item) => (
        <Product item={item} isRemovable={true}></Product>
      ))}
    </ul>
  );
};

export default Casamento;
