import MapScreen from './src/screens/MapScreen';
import MapCicloRuta from './src/components/MapView';
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
import ChooseLocation from './src/components/ChooseLocation';
import CrearGrupoScreen from './src/screens/CrearGrupoScreen';
import ReporteScreen from './src/screens/ReporteScreen';
import IngresarGPrivado from './src/screens/IngresarGPrivado';
import IngresarGPublico from './src/screens/IngresarGPublico';
import CrearReporteScreen from './src/screens/CrearReporteScreen';
import TimePicker from './src/components/TimePicker';
import GruposScreen from './src/screens/GruposScreen';
import EliminarGrupo from './src/screens/EliminarGrupo';
import EliminarCuenta from './src/screens/EliminarCuentaScreen';
import EditarUsuario from './src/screens/EditarUsuarioScreen';
import ChatGrupo from './src/screens/ChatGrupoScreen';
import EliminarItinerario from './src/screens/EliminarItinerario';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/context/AuthContext';


const Stack = createStackNavigator();

export default function App () {
    return (
        <NavigationContainer>
          <AuthProvider>
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
              name="Cambiar Contraseña"
              component={CambioContraScreen}
            />
            <Stack.Screen
              name="Map View"
              component={MapScreen}
            />
            <Stack.Screen
              name="Map Cicloruta"
              component={MapCicloRuta}
            />
            <Stack.Screen
              name="Ruta"
              component={ChooseLocation}
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
              name="Eliminar Grupo"
              component={EliminarGrupo}
            /> 
            <Stack.Screen
              name="Eliminar Itinerario"
              component={EliminarItinerario}
            /> 
            <Stack.Screen
              name="Grupos"
              component={GruposScreen}
            />  
            <Stack.Screen
              name="Mis Grupos"
              component={GrupoScreen}
            /> 
            <Stack.Screen
              name="Privado"
              component={IngresarGPrivado}
            /> 
            <Stack.Screen
              name="Publico"
              component={IngresarGPublico}
            /> 
            <Stack.Screen
              name="Chat Grupo"
              component={ChatGrupo}
            /> 
            <Stack.Screen
              name="Reportes"
              component={ReporteScreen}
            /> 
            <Stack.Screen
              name="Crear Reporte"
              component={CrearReporteScreen}
            /> 
            <Stack.Screen
              name="Time"
              component={TimePicker}
            /> 
            <Stack.Screen
              name="Eliminar Cuenta"
              component={EliminarCuenta}
            /> 
            <Stack.Screen
              name="Editar Cuenta"
              component={EditarUsuario}
            /> 
          </Stack.Navigator>
          </AuthProvider>
        </NavigationContainer>
    );
}



