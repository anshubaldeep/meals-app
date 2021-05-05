import React, { useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import CustomHeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = (props) => {
  const selectedMeal = useSelector(
    (state) =>
      state.meals.meals.filter(
        (meal) => meal.id === props.navigation.getParam("mealId")
      )[0]
  );
  const favoriteMeal = useSelector((state) =>
    state.meals.favoriteMeals.some(
      (meal) => props.navigation.getParam("mealId") === meal.id
    )
  );
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(selectedMeal.id));
  }, [dispatch, selectedMeal]);
  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);
  useEffect(() => {
    props.navigation.setParams({ favoriteMeal: favoriteMeal });
  }, [favoriteMeal]);
  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={{ height: 300, width: "100%" }}
      ></Image>
      <View style={{ paddingBottom: 50, marginHorizontal: 15 }}>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={{ ...styles.MealRow, ...styles.MealDetail }}>
          <Text style={styles.MealDetailText}>{selectedMeal.duration}m</Text>
          <Text style={styles.MealDetailText}>
            {selectedMeal.affordability}
          </Text>
          <Text style={styles.MealDetailText}>{selectedMeal.complexity}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        <Text>
          {selectedMeal.ingredients.map((ing) => (
            <Text key={ing}>
              {ing}
              {"\n"}
            </Text>
          ))}
        </Text>
        <Text style={styles.title}>Steps</Text>
        <Text>
          {selectedMeal.steps.map((step, id) => (
            <Text key={id}>
              {parseInt(id) + 1}. {step}
              {"\n"}
            </Text>
          ))}
        </Text>
        <View style={styles.screen}>
          <Button
            title="Go back to Categories"
            onPress={() => props.navigation.goBack()}
            sty
          ></Button>
        </View>
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationOptions) => {
  const selectedMeal = navigationOptions.navigation.getParam("mealTitle");
  const toggleFav = navigationOptions.navigation.getParam("toggleFav");
  const currentMealIsFavorite = navigationOptions.navigation.getParam(
    "favoriteMeal"
  );
  return {
    headerTitle: selectedMeal,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={currentMealIsFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  MealRow: {
    flexDirection: "row",
  },
  MealDetail: {
    paddingHorizontal: 30,
    justifyContent: "space-around",
    alignItems: "center",
    height: "7%",
    textTransform: "uppercase",
  },
  MealDetailText: {
    textTransform: "uppercase",
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default MealDetailScreen;
