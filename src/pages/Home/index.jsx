import { useHistory } from "react-router";
import ProductList from "../../components/ProductList";

const Home = () => {
  const history = useHistory();

  const changePage = (path) => {
    history.push(path);
  };

  return (
    <div>
      <h3>Bem vinde, escolha a sua bebida ideal para um evento daqueles!</h3>
      <button onClick={() => changePage("/casamento")}>Go to Casamento</button>
      <button onClick={() => changePage("/confra")}>
        Go to Confraternização
      </button>
      <button onClick={() => changePage("/formatura")}>Go to Formatura</button>
      <ProductList />
    </div>
  );
};

export default Home;
