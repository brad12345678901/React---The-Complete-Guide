import { useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";
import { StoreContext } from "./storeContext";

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
