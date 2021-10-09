import Routes from "./routes";
import { ProductProvider } from "./providers/products";
import { CasamentoProvider } from "./providers/casamento";
import { ConfraProvider } from "./providers/confra";
import { FormaturaProvider } from "./providers/formatura";
import GlobalStyle from "./globalStyles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FormaturaProvider>
        <ConfraProvider>
          <CasamentoProvider>
            <ProductProvider>
              <GlobalStyle />
              <Routes />
            </ProductProvider>
          </CasamentoProvider>
        </ConfraProvider>
      </FormaturaProvider>
    </div>
  );
}

export default App;
