import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import Home from './screens/Home';
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name = 'Home'
          component={Home}
          options = {{headerShown: false}}
        />

        <Stack.Screen
          name = 'LogIn'
          component = {LogIn}
          options = {{headerShown: false}}
        />

        <Stack.Screen
          name = 'SignUp'
          component = {SignUp}
          options = {{headerShown: false}}
        />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}