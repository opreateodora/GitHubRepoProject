import {AppearanceProvider} from 'react-native-appearance';
import React from 'react';  
import {createStackNavigator} from 'react-navigation-stack';  
import { createAppContainer } from "react-navigation";
import Screen1 from './src/screen1';  
import Screen2 from './src/screen2';  
  
const AppNavigator = createStackNavigator(  
  
    {  
        Screen1: Screen1,  
        Screen2: Screen2  
    },  
    {  
        initialRouteName: "Screen1"  
    }  
);  
export default createAppContainer(AppNavigator);  