import React from "react";
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from "react-native";


const height = Dimensions.get('window').height

const Map = () => {
    return (
        <MapView
            style= {styles.map}
            loadingEnabled = {true}
            region = {{
                latitude: 7.119132188245396, 
                longitude: -73.11804998534316,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04
            }}
        >         
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map