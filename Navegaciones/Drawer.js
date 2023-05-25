import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '@react-navigation/drawer';
import Acerca from '../Pantallas/Acerca';
import Configuración from '../Pantallas/Configuración';
import Inicio from '../Pantallas/Inicio';
import Lista from '../Pantallas/Lista';
import Crear_carro from '../Pantallas/Crear_carro';
import Istereg from '../Pantallas/Istereg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Detalles from '../Pantallas/Detalles';

const Drawer = createDrawerNavigator();

export default function Drawer1() {
    return (
        <Drawer.Navigator
            initialRouteName="Inicio"
            gesturesEnabled={true}
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={({ route }) => ({
                drawerIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Inicio") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Configuración") {
                        iconName = focused ? "construct" : "construct-outline";
                    } else if (route.name === "Acerca") {
                        iconName = focused ? "information-circle" : "information-circle-outline";
                    } else if (route.name === "Lista carros") {
                        iconName = focused ? "list" : "list-outline";
                    } else if (route.name === "Crear carro") {
                        iconName = focused ? "create" : "create-outline";
                    } else if (route.name === "Istereg") {
                        iconName = focused ? "egg" : "egg-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                activeTintColor: "#137a7f",
                inactiveTintColor: "#86cecb",
                labelStyle: {
                    fontSize: 12,
                },
            })}
        >
            <Drawer.Screen name="Inicio" component={Inicio} />
            <Drawer.Screen name="Lista carros" component={Lista} />
            <Drawer.Screen name="Detalles" component={Detalles}
                options={{
                    drawerItemStyle: { height: 0 }
                }} />
            <Drawer.Screen name="Crear carro" component={Crear_carro} />
            <Drawer.Screen name="Configuración" component={Configuración} />
            <Drawer.Screen name="Acerca" component={Acerca} />
            <Drawer.Screen name="Istereg" component={Istereg} />
        </Drawer.Navigator>
    );
};