import { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import { FormaturaContext } from "../../providers/formatura";

const Formatura = () => {
  const { formatura } = useContext(FormaturaContext);

  return (
    <ul>
      <Link to="/">Home</Link>
      {formatura.map((item) => (
        <Product item={item} isRemovable={true}></Product>
      ))}
    </ul>
  );
};

export default Formatura;
