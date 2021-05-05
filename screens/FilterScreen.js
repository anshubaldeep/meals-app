import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import CustomHeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";
import { setFilters } from "../store/actions/meals";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.filterValue}
        onValueChange={props.onChangeSwitch}
        trackColor={{ true: colors.primaryColor, false: "#7B83EB" }}
        thumbColor={Platform.OS === "android" ? colors.primaryColor : ""}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const [glutenFilter, setGlutenFilter] = useState(false);
  const [lactoseFilter,setLactoseFilter]=useState(false);
  const [veganFilter,setVeganFilter]=useState(false);
  const [vegetarianFilter,setVegetarianFilter]=useState(false);
  const dispatch=useDispatch();
  const saveFilters=useCallback(()=>{
    const appliedFilters={
      isGlutenFree:glutenFilter,
      isLactoseFree:lactoseFilter,
      isVegan:veganFilter,
      isVegetarian:vegetarianFilter
    }
    dispatch(setFilters(appliedFilters));
  },[glutenFilter,lactoseFilter,veganFilter,vegetarianFilter]);
  useEffect(()=>{
    props.navigation.setParams({save:saveFilters});
  },[saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        onChangeSwitch={(newValue) => setGlutenFilter(newValue)}
        filterValue={glutenFilter}
      />
      <FilterSwitch
        label="Lactose-Free"
        onChangeSwitch={(newValue) => setLactoseFilter(newValue)}
        filterValue={lactoseFilter}
      />
      <FilterSwitch
        label="Vegan"
        onChangeSwitch={(newValue) => setVeganFilter(newValue)}
        filterValue={veganFilter}
      />
      <FilterSwitch
        label="Vegetarian"
        onChangeSwitch={(newValue) => setVegetarianFilter(newValue)}
        filterValue={vegetarianFilter}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          iconSize={23}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight:()=>(
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-save"
          iconSize={20}
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "80%",
    marginHorizontal: 35,
    marginVertical:15
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FilterScreen;
