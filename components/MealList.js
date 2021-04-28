import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MealItem from './MealItem';


const MealList=(props)=>{
    const onSelectMeal=(id)=>{
        props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: id,
            },
          });
    }

    const renderMealItem=(itemData)=>(
        <MealItem 
            title={itemData.item.title} 
            duration={itemData.item.duration}
            complexity={itemData.item.complexity.toUpperCase()}
            affordability={itemData.item.affordability.toUpperCase()}
            image={itemData.item.imageUrl}
            onSelect={()=>onSelectMeal(itemData.item.id)}/>
    )
        return(
            <View style={styles.list}>
                 <FlatList
                    data={props.listData}
                    renderItem={renderMealItem}
                    style={{width:'100%',paddingHorizontal:10}}
                />
            </View>
        );
};


const styles=StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default MealList;