import { createContext, useState } from "react";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [formatura, setFormatura] = useState([]);

  const addToFormatura = (item) => {
    setFormatura([...formatura, item]);
  };

  const removeFromFormatura = (item) => {
    setFormatura(formatura.filter((product) => product.id !== item.id));
  };
  return (
    <FormaturaContext.Provider
      value={{ formatura, setFormatura, addToFormatura, removeFromFormatura }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
