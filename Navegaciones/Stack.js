import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalles from '../Pantallas/Detalles';

const Stack = createNativeStackNavigator();

export default function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detalles" component={Detalles} />
    </Stack.Navigator>
  );
}