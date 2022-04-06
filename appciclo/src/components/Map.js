import React, { useState } from "react";
import MapView from 'react-native-maps';
import { API_KEY_GOOGLE_MAPS } from '../store/GoogleMaps'
import { StyleSheet, Dimensions } from "react-native";
import MapViewDirections from 'react-native-maps-directions';

const Kml_File = 'https://pastebin.com/raw/203B9ixP'
const height = Dimensions.get('window').height


export default function Map () {

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

    const { pickupCords, droplocationCords } = state

    return (
        <MapView
            style= {styles.map}
            loadingEnabled = {true}
            kmlSrc = {Kml_File} 
            initialRegion = {pickupCords}
        > 
          <MapViewDirections
                origin={pickupCords}
                destination={droplocationCords}
                apikey={API_KEY_GOOGLE_MAPS}
                strokeWidth= {3}
                strokeColor="green"
            />        
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})
