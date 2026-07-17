import { createContext } from "react";

export const initialState = {
  mealItems: [],
  mealItemsCount: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_MEAL_ITEM": {
      const existingMeal = state.mealItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingMeal === -1) {
        return {
          ...state,
          mealItems: [...state.mealItems, { ...action.payload, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          mealItems: state.mealItems.map((item, index) =>
            index === existingMeal
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
    }
    case "REMOVE_MEAL_ITEM": {
      const existingMeal = state.mealItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingMeal === -1) {
        return {
          ...state,
          mealItems: [...state.mealItems, { ...action.payload, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          mealItems: state.mealItems.map((item, index) =>
            index === existingMeal
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
    }
    default:
      return { ...state };
  }
  return state;
}
