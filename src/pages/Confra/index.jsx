import { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";

import { ConfraContext } from "../../providers/confra";

const Confra = () => {
  const { confra } = useContext(ConfraContext);

  return (
    <ul>
      <Link to="/">Home</Link>

      {confra.map((item) => (
        <Product item={item} isRemovable={true}></Product>
      ))}
    </ul>
  );
};

export default Confra;
