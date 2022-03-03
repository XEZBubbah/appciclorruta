import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapScreen from './src/screens/MapScreen';
import MenUsuarioScreen from './src/screens/MenUsuarioScreen';
import { setNavigator } from './src/navigationRef'; 

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    MapView: MapScreen,
    MenUsuario: MenUsuarioScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <App
      ref={navigator => {
        setNavigator(navigator)
      }}
    />
  );
}
