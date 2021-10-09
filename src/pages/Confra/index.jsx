import { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";

import { ConfraContext } from "../../providers/confra";
import { BackHome, Container, List } from "../Home/styled";

const Confra = () => {
  const { confra } = useContext(ConfraContext);

  return (
    <Container>
      <BackHome>
        <Link to="/">Home</Link>
      </BackHome>
      <List>
        {confra.map((item) => (
          <Product item={item} isRemovable={true}></Product>
        ))}
      </List>
    </Container>
  );
};

export default Confra;
