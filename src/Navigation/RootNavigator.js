// import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { useSelector } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import AboutMovie from '../Screens/AboutMovie';
import SeatSection from '../Screens/SeatSection'

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
const isLoggedIn=useSelector(state=>state.isLoggedIn)
const user=useSelector(state=>state.user)


console.log("??????llgonstats",isLoggedIn,user)


  return (
    <NavigationContainer>
      <Stack.Navigator
        //  initialRouteNamee={isLoggedIn?'Homepage':'Auth'}
initialRouteName='first'
        screenOptions={{
          headerShown: false,
          lazy:false
        }}>

<Stack.Screen name="first" component={AboutMovie} />
<Stack.Screen name="second" component={SeatSection} />
 

      </Stack.Navigator>
    </NavigationContainer>
  );
};
