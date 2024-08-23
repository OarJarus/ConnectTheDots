/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CTDStart from './components/CTDStart';
import Tabs from './components/Tabs';

const StackNavigator=createNativeStackNavigator();

const App=()=>{
    return(
    <NavigationContainer>
        <StackNavigator.Navigator screenOptions={{headerShown: false}}>
            <StackNavigator.Screen name="Tabs" component={Tabs} options={{title: 'Home'}}/>
        </StackNavigator.Navigator>
    </NavigationContainer>
    );
}

export default App;

/*
<StackNavigator.Navigator initialRouteName='CTDStart' screenOptions={{headerShown: false}}>
            <StackNavigator.Screen name="CTDStart" component={CTDStart} options={{title: 'ConnectTheDots'}}/>
            <StackNavigator.Screen name="Tabs" component={Tabs} options={{title: 'Home'}}/>
        </StackNavigator.Navigator>
*/