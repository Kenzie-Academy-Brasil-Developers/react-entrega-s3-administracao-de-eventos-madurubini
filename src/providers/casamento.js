import { createContext, useState } from "react";

export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const [casamento, setCasamento] = useState([]);

  const addToCasamento = (item) => {
    setCasamento([...casamento, item]);
  };

  const removeFromCasamento = (item) => {
    setCasamento(casamento.filter((product) => product.id !== item.id));
  };
  return (
    <CasamentoContext.Provider
      value={{ casamento, setCasamento, addToCasamento, removeFromCasamento }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
