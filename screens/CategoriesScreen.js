import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";
import { Categories } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const selectCategory = (itemData) => {
    props.navigation.navigate({
      routeName: "CategoryMeals",
      params: {
        categoryId: itemData.item.id,
      },
    });
  };

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() => selectCategory(itemData)}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList data={Categories} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = (navigationOptions) => {
  
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
          navigationOptions.navigation.toggleDrawer()
        }} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "open-sans-bold",
  },
});

export default CategoriesScreen;
