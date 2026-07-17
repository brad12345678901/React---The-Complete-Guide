import { useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";
import { StoreContext } from "./storeContext";

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addMealItem(item) {
    const { id, name, price, description } = item;
    dispatch({
      type: "ADD_MEAL_ITEM",
      payload: { id, name, price, description },
    });
  }

  function removeMealItem(item) {
    const { id, name, price, description } = item;
    dispatch({
      type: "REMOVE_MEAL_ITEM",
      payload: { id, name, price, description },
    });
  }
  
  return (
    <StoreContext.Provider
      value={{ state, dispatch, addMealItem, removeMealItem }}
    >
      {children}
    </StoreContext.Provider>
  );
}
