import { createContext, useState } from "react";

export const ConfraContext = createContext([]);

export const ConfraProvider = ({ children }) => {
  const [confra, setConfra] = useState([]);

  const addToConfra = (item) => {
    setConfra([...confra, item]);
  };

  const removeFromConfra = (item) => {
    setConfra(confra.filter((product) => product.id !== item.id));
  };
  return (
    <ConfraContext.Provider
      value={{ confra, setConfra, addToConfra, removeFromConfra }}
    >
      {children}
    </ConfraContext.Provider>
  );
};
