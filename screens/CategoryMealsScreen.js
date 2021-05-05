import React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import colors from "../constants/colors";
import { Categories, MEALS } from "../data/dummy-data";

const CategoriyMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const selectedCategory = Categories.filter((cat) => catId === cat.id)[0]
    .title;

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categories.indexOf(catId) >= 0
  );
  if (displayedMeals.length == 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found! Maybe check the filters selected.</Text>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <MealList listData={displayedMeals} navigation={props.navigation} />
    </View>
  );
};

CategoriyMealsScreen.navigationOptions = (navigationOptions) => {
  const catId = navigationOptions.navigation.getParam("categoryId");
  const selectedCategory = Categories.filter((cat) => catId === cat.id)[0]
    .title;
  return {
    headerTitle: selectedCategory,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    alignItems: "center",
    width: "60%",
    marginTop: 20,
  },
  content:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
});

export default CategoriyMealsScreen;
