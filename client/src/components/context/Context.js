import { createContext } from "react";

const UserContext = createContext({});
const CartContext = createContext();
const ProductsContext = createContext();
const SideBarContext = createContext();
const LogoutContext = createContext();
export {
  UserContext,
  CartContext,
  ProductsContext,
  SideBarContext,
  LogoutContext,
};
