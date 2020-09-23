import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransactionScreen from './Screens/BookTransactionScreen';
import SearchScreen from './Screens/SearchScreen';
import {createBottomTabNavigator} from 'react-navigation-bottom-tabs';
import {NavigationContainer} from 'react-navigation/native';

export default class App extends Component{
  render(){
  return (
    <NavigationContainer>
    <TabNavigator>
      <TabScreen name="Transaction" component={BookTransactionScreen}/>
      <TabScreen name="Search" component={SearchScreen}/>
      </TabNavigator>  
    </NavigationContainer>
  )
  }
} 

const tab=createBottomTabNavigator();


