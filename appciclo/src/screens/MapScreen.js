import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, StyleSheet } from "react-native";
import Map from "../components/Map"; 


const MapScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset = {{ top: 'always'}}>
            <Text style= {{ fontSize: 40 }}> Vista de Mapa </Text>
            <Map />
        </SafeAreaView>
    )
}

export default MapScreen