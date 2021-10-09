import { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import { FormaturaContext } from "../../providers/formatura";
import { BackHome, Container, List } from "../Home/styled";

const Formatura = () => {
  const { formatura } = useContext(FormaturaContext);

  return (
    <Container>
      <BackHome>
        <Link to="/">Home</Link>
      </BackHome>
      <List>
        {formatura.map((item) => (
          <Product item={item} isRemovable={true}></Product>
        ))}
      </List>
    </Container>
  );
};

export default Formatura;
