import React from "react"
import {Text, View, StyleSheet} from "react-native"
// Importar botones de navegación
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// Importar contenedor de las pantallas
import { NavigationContainer } from "@react-navigation/native"
// Importar pantallas
import InicioPantalla from "./pantallas/inicio"
import BombilloPantalla from "./pantallas/Bombillo"
import PrestamosPantalla from "./pantallas/prestamos"

// Crear objetos tabs
const tab = createBottomTabNavigator();
// Funcion para crear los botones de navegación
function MyTabs(){
    return(
        <tab.Navigator>
            <tab.Screen name="Inicio" component={InicioPantalla}/>
            <tab.Screen name="Bombillo" component={BombilloPantalla}/>
            <tab.Screen name="Prestamos" component={PrestamosPantalla}/>
        </tab.Navigator>
    );
}

// Funcion para colocar los botones de navegación en un contenedor
export default function Navegacion(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}
