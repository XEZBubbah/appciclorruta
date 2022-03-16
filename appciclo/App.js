import MapScreen from './src/screens/MapScreen';
import LoginScreen from './src/screens/LoginScreen';
import CrearUsuaScreen from './src/screens/CrearUsuaScreen';
import RecuperarContScreen from './src/screens/RecuperarContScreen';
import CambioContraScreen from './src/screens/CambioContraScreen';
import NoticiasScreen from './src/screens/NoticiasScreen';
import MenUsuarioScreen from './src/screens/MenUsuarioScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import ItinerarioScreen from './src/screens/ItinerariosScreen';
import CrearItinerarioScreen from './src/screens/CrearItinierarioScreen';
import GrupoScreen from './src/screens/GrupoScreen';
import CrearGrupoScreen from './src/screens/CrearGrupoScreen';
import ReporteScreen from './src/screens/ReporteScreen';
import CrearReporteScreen from './src/screens/CrearReporteScreen';
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
            <Stack.Screen
              name="Perfil"
              component={PerfilScreen}
            /> 
            <Stack.Screen
              name="Itinerarios"
              component={ItinerarioScreen}
            />
            <Stack.Screen
              name="Crear Itinerario"
              component={CrearItinerarioScreen}
            />
            <Stack.Screen
              name="Crear Grupo"
              component={CrearGrupoScreen}
            /> 
            <Stack.Screen
              name="Grupos"
              component={GrupoScreen}
            />  
            <Stack.Screen
              name="Reportes"
              component={ReporteScreen}
            /> 
            <Stack.Screen
              name="Crear Reporte"
              component={CrearReporteScreen}
            /> 
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App


