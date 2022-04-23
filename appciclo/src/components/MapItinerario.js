import React , { useRef } from "react";
import MapView, { Marker } from 'react-native-maps';
import { API_KEY_GOOGLE_MAPS } from '../store/GoogleMaps'
import MapViewDirections from 'react-native-maps-directions';
import { NativeBaseProvider,View } from 'native-base';
import useAuth from "../hooks/useAuth";
import { StyleSheet, Dimensions } from "react-native";

const Kml_File = 'https://pastebin.com/raw/203B9ixP'
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    map: {
        height
    },
});

export default function MapItinerario() {

    const { puntoi, puntol } = useAuth();
    const initialValues = { latitude: 7.126844, longitude: -73.118850, longitudeDelta: 0.007, latitudeDelta: 0.007 };
    console.log("Inicio "+ JSON.stringify(puntoi));
    console.log("Final "+JSON.stringify(puntol));
    const partida = { latitude: puntoi.latitude, longitude: puntoi.longitud };
    const llegada = { latitude: puntol.latitude, longitude: puntol.longitud };

    const mapRef = useRef()

    return (
    <NativeBaseProvider>
    <View>
        <MapView
            ref={mapRef}
            style= {styles.map}
            loadingEnabled = {true}
            kmlSrc = {Kml_File} 
            initialRegion = {initialValues}
        > 
        <Marker 
            image={require('../imgs/cycling.png')}
            coordinate={partida}
        />
        <Marker 
            coordinate={llegada}
        />
            <MapViewDirections
                origin={partida}
                destination={llegada}
                apikey={API_KEY_GOOGLE_MAPS}
                strokeWidth= {3}
                mode={"TRANSIT"}
                strokeColor="green"
                optimizeWaypoints= {true}
                onReady={result =>{
                    mapRef.current.fitToCoordinates(result.coordinates, {
                        edgePadding:{
                            rigth: 30,
                            bottom: 300,
                            left: 30,
                            top: 100
                        }
                    })
                }}
            />        
        </MapView>
    </View>
    </NativeBaseProvider>
    )
}