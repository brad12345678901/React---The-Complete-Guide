import { createContext } from "react";

export const initialState = {
  mealItems: [],
  modalCartProgression: 0,
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
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
    }
    case "REMOVE_MEAL_ITEM": {
      const existingMeal = state.mealItems.find(
        (item) => item.id === action.payload.id,
      );

      if (existingMeal) {
        if (existingMeal.quantity === 1) {
          return {
            ...state,
            mealItems: state.mealItems.filter(
              (item) => item.id !== action.payload.id,
            ),
          };
        } else {
          return {
            ...state,
            mealItems: state.mealItems.map((item, index) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            ),
          };
        }
      }
    }

    case "PROGRESS_MODAL": {
      return {
        ...state,
        modalCartProgression: state.modalCartProgression + 1,
      };
    }

    case "RESET_MODAL_PROGRESS": {
      return { ...state, modalCartProgression: 0 };
    }

    default:
      return { ...state };
  }
  return state;
}
