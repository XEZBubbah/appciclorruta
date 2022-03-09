import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, StyleSheet } from "react-native";
import Map from "../components/Map"; 


function MapScreen () {
    return (
        <SafeAreaView forceInset = {{ top: 'always'}}>
            <Text style= {{ fontSize: 20 }}>  </Text>
            <Map />
        </SafeAreaView>
    )
}

export default MapScreen