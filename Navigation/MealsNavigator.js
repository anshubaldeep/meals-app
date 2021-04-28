import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import colors from "../constants/colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriyMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FilterScreen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoriyMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.secondaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: colors.secondaryColor,
    },
  },
};

const MealsFavNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: colors.secondaryColor,
        },
      });

const Filters = createStackNavigator({
  Filters: FilterScreen,
  },
  {
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: colors.primaryColor,
    },
    headerTintColor: "white",
  },
});

const MainNavigator = createDrawerNavigator({
  MealsTabs: {screen:MealsFavNavigator,navigationOptions:{
    drawerLabel:'Meals'
  }},
  Filters: Filters,
},
{
  contentOptions:{
    activeTintColor:colors.secondaryColor,
    labelStyle:{
      fontFamily:'open-sans'
    }
  }
});

export default createAppContainer(MainNavigator);
