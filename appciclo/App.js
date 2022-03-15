import MapScreen from './src/screens/MapScreen';
import LoginScreen from './src/screens/LoginScreen';
import CrearUsuaScreen from './src/screens/CrearUsuaScreen';
import RecuperarContScreen from './src/screens/RecuperarContScreen';
import CambioContraScreen from './src/screens/CambioContraScreen';
import NoticiasScreen from './src/screens/NoticiasScreen';
import MenUsuarioScreen from './src/screens/MenUsuarioScreen';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App () {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName= "login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              name="Crear Usuario"
              component={CrearUsuaScreen}
            />
            <Stack.Screen
              name="Menú Usuario"
              component={MenUsuarioScreen}
            />
            <Stack.Screen
              name="Recuperar Contraseña"
              component={RecuperarContScreen}
            />
            <Stack.Screen
              name="Map View"
              component={MapScreen}
            />
            <Stack.Screen
              name="Cambiar Contraseña"
              component={CambioContraScreen}
            />
            <Stack.Screen
              name="Noticias"
              component={NoticiasScreen}
            /> 
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App


