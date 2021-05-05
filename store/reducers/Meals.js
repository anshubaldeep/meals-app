import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  favoriteMeals: [],
  filteredMeals: MEALS,
};

const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (item) => item.id === action.mealId
      );
      if (existingIndex === -1) {
        const updatedMeals=[...state.favoriteMeals];  
        updatedMeals.push(
          state.meals.find((meal) => meal.id === action.mealId)
        );
        return {...state,favoriteMeals:updatedMeals}
      }
      else{
        const updatedMeals=[...state.favoriteMeals];
        updatedMeals.splice(existingIndex,1); 
        return {...state,favoriteMeals:updatedMeals};
      }
    case SET_FILTERS:
      const filters=action.filters;
      const updateMeals=state.meals.filter(meal=>meal.isGlutenFree===filters.isGlutenFree && meal.isVegan===filters.isVegan && meal.isVegetarian===filters.isVegetarian && meal.isLactoseFree===filters.isLactoseFree);
      return {...state,filteredMeals:updateMeals};
    default:
      return state;
  }
};

export default MealsReducer;
