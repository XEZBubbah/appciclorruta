import React, { useState, useRef } from "react";
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions} from "react-native";

const Kml_File = 'https://pastebin.com/raw/203B9ixP'
const height = 450

export default function MapCicloRutaItinerario () {

    const [state, setState] = useState({
        initialValues: {
            latitude: 7.126844, 
            longitude: -73.118850,
            longitudeDelta: 0.034,
            latitudeDelta: 0.034,
        },
    })

    const mapRef = useRef()

    return (
    <View>
        <MapView
            ref={mapRef}
            style= {styles.map}
            loadingEnabled = {true}
            kmlSrc = {Kml_File} 
            initialRegion = {state.initialValues}
        >        
        </MapView>
    </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    },
});