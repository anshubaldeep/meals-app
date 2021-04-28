import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={props.onSelect}
    >
      <View style={{...styles.container, ...{backgroundColor:props.color}}}>
        <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container:{
      flex:1,
      borderRadius:10,
      shadowColor:'red',
      shadowOpacity:0.26,
      shadowOffset:{width:0,height:2},
      shadowRadius:10,
      elevation:3,
      padding:13,
      alignItems:'flex-end',
      justifyContent:'flex-end',
  },
  title:{
      fontFamily:'open-sans-bold',
      fontSize:22,
      textAlign:'right'
  }
});

export default CategoryGridTile;
