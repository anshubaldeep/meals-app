import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';


const MealDetailScreen=(props)=>{
        return(
            <View style={styles.screen}>
                <Text>{MEALS.filter(meal=>meal.id===props.navigation.getParam('mealId'))[0].title}</Text>
                <Text>This is the meal detail screen!</Text>
                <Button title="Go back to Categories" onPress={()=>props.navigation.goBack()}></Button>
            </View>
        );
};

MealDetailScreen.navigationOptions=(navigationOptions)=>{
    const selectedMeal=MEALS.filter(meal=>meal.id===navigationOptions.navigation.getParam('mealId'))[0].title;
    return{
        headerTitle:selectedMeal,
        headerRight:()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
            title="Favorite" 
            iconName='ios-star-outline'
            onPress={()=>{console.log("Favorite marked")}}
             />
        </HeaderButtons>
    }
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
});

export default MealDetailScreen;