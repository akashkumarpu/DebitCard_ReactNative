import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardScreen from './src/screens/CardScreen';
import LimitScreen from './src/screens/LimitScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Card" component={CardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Limit" component={LimitScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}