import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer1 from './Navegaciones/Drawer';
import Botton1 from './Navegaciones/Botton';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer1/>
    </NavigationContainer>
  );
}