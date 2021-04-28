import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import colors from '../constants/colors';
import { Categories,MEALS } from '../data/dummy-data';


const CategoriyMealsScreen=(props)=>{
    const catId=props.navigation.getParam('categoryId');
    const selectedCategory=Categories.filter(cat=>catId===cat.id)[0].title;
    
    const displayedMeals=MEALS.filter(meal=>meal.categories.indexOf(catId)>=0)
    return(
            <View style={styles.screen}>
               <MealList listData={displayedMeals} navigation={props.navigation}/>
                <Text>This is the categoriy with meals screen!</Text>
                <View style={styles.Button}>
                <Button
                    title='Go Back'
                    onPress={()=>{props.navigation.goBack()}}
                />
                </View>
                <View style={styles.Button}>
                <Button
                    style={styles.Button}
                    title='Go to details'
                    onPress={()=>{props.navigation.popToTop()}}/>
                </View>
            </View>
        );
};

CategoriyMealsScreen.navigationOptions=(navigationOptions)=>{
    const catId=navigationOptions.navigation.getParam('categoryId');
    const selectedCategory=Categories.filter(cat=>catId===cat.id)[0].title;
    return{
        headerTitle:selectedCategory
    }
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Button:{
        alignItems:'center',
        width:'60%',
        marginTop:20
    }
});

export default CategoriyMealsScreen;