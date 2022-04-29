import React , { useRef, useState, useEffect } from "react";
import MapView, { Marker } from 'react-native-maps';
import { API_KEY_GOOGLE_MAPS } from '../store/GoogleMaps'
import MapViewDirections from 'react-native-maps-directions';
import { NativeBaseProvider,View, Button, Box } from 'native-base';
import useAuth from "../hooks/useAuth";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location'
import { StyleSheet, Dimensions, Alert } from "react-native";

const Kml_File = 'https://pastebin.com/raw/203B9ixP'
const height = 640;

const styles = StyleSheet.create({
    map: {
        height
    },
});

export default function MapItinerario() {

    const { puntoi, puntol } = useAuth();  
    const [initialValues, setInitialValues ] = useState(null);
    const [marketUsuario, setMarketUsuario] = useState(false);
    console.log("Inicio "+ JSON.stringify(initialValues));
    const partida = { latitude: puntoi.latitude, longitude: puntoi.longitud };
    const llegada = { latitude: puntol.latitude, longitude: puntol.longitud };
    const mapRef = useRef()
    const [ubiUsuario, setUbiUsuario] = useState(
        { latitude: 7.126844, longitude: -73.118850, longitudeDelta: 0.04, latitudeDelta: 0.04 }
    );

    const getLocationUser = async() => {
        const res = {status: false, location: null}
        const resulPermision = await Location.requestForegroundPermissionsAsync()
        if (resulPermision.status == "danied") {
            Alert.alert("Debe dar permisos de Localización");
            return res
        }
        const position = await Location.getCurrentPositionAsync({});
        const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007
        }
        res.status = true
        res.location = location
        setUbiUsuario(res.location);
        return res
    }
    function inciarRuta(){
        getLocationUser();
        setMarketUsuario(true);
    }

    useEffect(() =>{
        console.log("Soy UbiUsuario "+ JSON.stringify(ubiUsuario));
        setInitialValues(ubiUsuario);
    }, [ubiUsuario])

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
        {
            marketUsuario === true ? (
            <Marker 
                image={require('../imgs/user.png')}
                coordinate={initialValues}
            /> 
            ) : (
                console.log('Hola :)')
            )
        }
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
        <View height={200} width= {350} alignSelf= {'center'}>
            <Box>
                <Button onPress={inciarRuta}>Iniciar Ruta</Button>
            </Box>
            <Box paddingTop={3}>
                <Button>Enviar Alerta</Button>
            </Box>
        </View>
    </View>
    </NativeBaseProvider>
    )
}