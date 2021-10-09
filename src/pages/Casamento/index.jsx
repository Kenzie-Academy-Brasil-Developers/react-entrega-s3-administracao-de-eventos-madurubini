import { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import { CasamentoContext } from "../../providers/casamento";
import { BackHome, Container, List } from "../Home/styled";

const Casamento = () => {
  const { casamento } = useContext(CasamentoContext);

  return (
    <Container>
      <BackHome>
        <Link to="/">Home</Link>
      </BackHome>
      <List>
        {casamento.map((item) => (
          <Product item={item} isRemovable={true}></Product>
        ))}
      </List>
    </Container>
  );
};

export default Casamento;
