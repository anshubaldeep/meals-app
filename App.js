import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import MealsNavigator from './Navigation/MealsNavigator';
import { LogBox } from 'react-native';
import { combineReducers, createStore } from 'redux';
import MealsReducer from './store/reducers/Meals';
import { Provider } from 'react-redux';
LogBox.ignoreLogs(["Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",]);
const fetchFonts=()=>{
  Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

const store=createStore(combineReducers({
  meals:MealsReducer
}))

export default function App() {
  const [fontLoaded,setFontLoaded]=useState(false);
  
  if(!fontLoaded){
    return <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>setFontLoaded(true)}
        onError={(error)=>console.log(error)}
    />
  }
  
  return <Provider store={store}><MealsNavigator/></Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:22
  },
  text2:{
    fontSize:18
  }
});
