import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import { ProductProvider } from "./providers/products";
import { CasamentoProvider } from "./providers/casamento";
import { ConfraProvider } from "./providers/confra";
import { FormaturaProvider } from "./providers/formatura";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormaturaProvider>
          <ConfraProvider>
            <CasamentoProvider>
              <ProductProvider>
                <Routes />
              </ProductProvider>
            </CasamentoProvider>
          </ConfraProvider>
        </FormaturaProvider>
      </header>
    </div>
  );
}

export default App;
