import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{...styles.MealRow,...styles.MealHeader}}>
            <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.MealRow,...styles.MealDetail}}>
              <Text>{props.duration}m</Text>
              <Text>{props.affordability}</Text>
              <Text>{props.complexity}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MealRow: {
    flexDirection: "row",
  },
  MealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "gray",
    marginTop:10,
    borderRadius:10,
    overflow:'hidden',
    marginBottom:15
  },
  MealHeader:{
    height:'85%'
  },
  MealDetail:{
    paddingHorizontal:30,
    justifyContent:'space-between',
    alignItems:'center',
    height:'15%'
  },
  bgImage:{
      width:'100%',
      justifyContent:'flex-end'
  },
  title:{
      fontFamily:'open-sans-bold',
      backgroundColor: 'rgba(0,0,0,0.6)',
      padding:10,
      fontSize:20,
      textAlign:'center',
      color:'white'
    }
});

export default MealItem;
