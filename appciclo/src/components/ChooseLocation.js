import React, { useState } from "react";
import { LogBox, Alert } from 'react-native';
import useAuth from "../hooks/useAuth";
import { NativeBaseProvider, Text, Button, View, ScrollView } from "native-base";
import { API_KEY_GOOGLE_MAPS } from '../store/GoogleMaps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from "@react-navigation/native";

const Ruta = ({
    placeholderText,
    fecthAddress
}) => {
    const onPressAdress = (data , details) => {
        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        fecthAddress(lat, lng)
    }
    return(
        <View>
            <GooglePlacesAutocomplete
                placeholder={placeholderText}
                listViewDisplayed='auto'
                onPress={ onPressAdress }
                fetchDetails={true}
                query={{
                    key: API_KEY_GOOGLE_MAPS,
                    language: 'es',
                }}
            />
        </View>
    )
}

const ChooseLocation = (props) => {

    const { putFinal, putInicio } = useAuth();

    const navigation = useNavigation();

    const [ state, setState ] = useState({
        pickupCords: {},
        destinationCords: {}
    })

    const { pickupCords, destinationCords } = state

    function asingError(){
        Alert.alert(
            'Tenemos un problema', 
            'Tiene que llenar los campos vacios',
            [
                {text: 'Ok'}
            ]
        );
    }

    const check = () => {
        if(Object.keys(pickupCords).length === 0){
            return false
        }
        if(Object.keys(destinationCords).length === 0){
            return false
        }
        return true
    }

    const onDone = () => {
        const comp = check()
        if(comp === true){
            props.route.params.getCordinates({
                pickupCords,
                destinationCords
            })
            putInicio(pickupCords)
            putFinal(destinationCords)
            navigation.navigate('Map View')
        }else{
            asingError()
        }
    }

    const fecthAddressInicio = (lat, lng) => {
        setState({
            ...state, pickupCords:{
                latitude: lat,
                longitud: lng
            }
        })
    }

    const fecthAddressFin = (lat, lng) => {
        setState({
            ...state, destinationCords:{
                latitude: lat,
                longitud: lng
            }
        }) 
    }

    console.log('Inicio ', pickupCords)
    console.log('Fin ', destinationCords)
    
    LogBox.ignoreAllLogs()
    console.log('Props: ',props)

    return(
    <NativeBaseProvider>
    <View padding={7}>
        <ScrollView 
            keyboardShouldPersistTaps="handled" 
        >
            <Ruta
                placeholderText= "Lugar inicial de la ruta"
                fecthAddress={fecthAddressInicio}
            />
            <View style={{ marginBottom: 10 }} />
            <Ruta
                placeholderText= "Lugar final de la ruta"
                fecthAddress={fecthAddressFin}
            />
        </ScrollView>
        <Text></Text>
        <Button colorScheme="indigo" onPress={() => {onDone()}}>
            Enviar
        </Button>
    </View>
    </NativeBaseProvider>
    )
}


export default ChooseLocation;