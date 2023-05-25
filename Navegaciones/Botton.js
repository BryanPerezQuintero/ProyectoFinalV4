import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Acerca from '../Pantallas/Acerca';
import Configuración from '../Pantallas/Configuración';
import Inicio from '../Pantallas/Inicio';
import Ioicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Botton1() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#137a7f",
        tabBarInactiveTintColor: "#86cecb",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          paddingBottom: 5,
          backgroundColor: "#bec8d1",
        },
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = "home";
          } else if (route.name === "Configuración") {
            iconName = "construct";
          } else if (route.name === "Acerca") {
            iconName = "information-circle-outline";
          }

          return <Ioicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Configuración" component={Configuración} />
      <Tab.Screen name="Acerca" component={Acerca} />
    </Tab.Navigator>
  );
}