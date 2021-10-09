import { useHistory } from "react-router";
import ProductList from "../../components/ProductList";
import { Button, Buttons, Container } from "./styled";

const Home = () => {
  const history = useHistory();

  const changePage = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <h1>Drink Management</h1>
      <h3>Bem vinde, escolha a sua bebida ideal para um evento daqueles!</h3>
      <Buttons>
        <Button onClick={() => changePage("/casamento")}>
          Go to Casamento
        </Button>
        <Button onClick={() => changePage("/confra")}>
          Go to Confraternização
        </Button>
        <Button onClick={() => changePage("/formatura")}>
          Go to Formatura
        </Button>
      </Buttons>
      <h3>Menu de Bebidas</h3>
      <ProductList />
    </Container>
  );
};

export default Home;
