import { createContext } from "react";

export const initialState = {
  mealItems: [],
  mealItemsCount: 0,
};

const cartContext = createContext();

export function cartReducer(state, action) {
  console.log(action);
  return state;
}
