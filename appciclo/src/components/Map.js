import React, { useState, useRef } from "react";
import MapView, { Marker } from 'react-native-maps';
import { API_KEY_GOOGLE_MAPS } from '../store/GoogleMaps'
import { StyleSheet, Dimensions, View, Text} from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Kml_File = 'https://pastebin.com/raw/203B9ixP'
const height = 630


export default function Map () {

    const navigation = useNavigation();

    const [state, setState] = useState({
        pickupCords: {
            latitude: 7.126844, 
            longitude: -73.118850,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04
        },
        droplocationCords: {
            latitude: 7.120971,
            longitude: -73.116513,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04
        }
    })

    const mapRef = useRef()
    const { pickupCords, droplocationCords } = state
    const onPressLocation = () => {
        navigation.navigate('Ruta')
    }

    return (
    <View>
        <MapView
            ref={mapRef}
            style= {styles.map}
            loadingEnabled = {true}
            kmlSrc = {Kml_File} 
            initialRegion = {pickupCords}
        > 
        <Marker 
            image={require('../imgs/cycling.png')}
            coordinate={pickupCords}
        />
        <Marker 
            coordinate={droplocationCords}
        />
            <MapViewDirections
                origin={pickupCords}
                destination={droplocationCords}
                apikey={API_KEY_GOOGLE_MAPS}
                strokeWidth= {3}
                mode={"DRIVING"}
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
        <View styles={styles.bottomCard}>
            <TouchableOpacity
                style= {styles.inputStyle}
                onPress= {onPressLocation}
            >
               <Text> Selecciona la ruta </Text> 
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    },
    bottomCard: {
       backgroundColor: 'white',
       width: '100%',
       height: 300,
       padding: 30,
       borderTopEndRadius: 24,
       borderTopStartRadius: 24,
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        marginTop: 16,
    },
});
