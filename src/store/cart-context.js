import { createContext } from "react";

export default createContext({
  items: [],
  totalAmount: 0,
  addItem: (i) => {},
  removeItem: (id) => {},
});
