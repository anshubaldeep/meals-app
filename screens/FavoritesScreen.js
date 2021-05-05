import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderTitle } from "react-navigation-stack";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import {useSelector} from 'react-redux';
import colors from "../constants/colors";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favoriteMeals=useSelector(state=>state.meals.favoriteMeals);
  if(favoriteMeals.length===0){
    return <View style={styles.content}><Text>No favorites found. Start adding some!</Text></View>
  }
  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
};
FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
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
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default FavoritesScreen;
