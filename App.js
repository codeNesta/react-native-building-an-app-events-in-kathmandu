//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {createStackNavigator, } from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import AllEvents from './src/AllEvents';
import Detail from './src/Detail';
import Maps from './src/Maps';




const Details = createStackNavigator({
    Details:{
        screen:Detail
    },
    Map:{
        screen:Maps
    }
},{
    initialRouteName:'Details',
    headerMode:'none'
})



const Events = createStackNavigator({
    Event:{
        screen:AllEvents
    },
    
},{
    defaultNavigationOptions:()=> ({
        headerTitle: <Image style={{height:180, width:180}} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/eve.png?alt=media&token=004e2c4e-9000-4ec4-a82f-866b71f3bd60'}}  />
    }),
    headerLayoutPreset:'center'
})


const BottomTabs = createBottomTabNavigator({
  
   
    Events:{
        screen:Events,
        navigationOptions:({navigation}) => ({
            tabBarIcon : ({focused, tintColor}) => {
                return <Icon name="dot-circle-o" size={20}  color={tintColor} />
            }
        })
        
    },
    Detail:{
        screen:Details,
        navigationOptions:({navigation}) => ({
            tabBarIcon : ({focused, tintColor}) => {
                return <Icon name="file-text" size={20}  color={tintColor}  />
            }
        })
    },
    
},{
    tabBarOptions: {
        activeTintColor: '#ff4757',
     
        inactiveTintColor:'black',
        // activeBackgroundColor:'#114e52',
        labelStyle: {
          fontSize: 13,
         
        },
        style: {
          backgroundColor: '#86dfe5',
        
          
        },
      }
  
})

 const switched = createAppContainer(
     createSwitchNavigator({
         Events:Events,
         AppStack: BottomTabs
     })
)

 export default switched



