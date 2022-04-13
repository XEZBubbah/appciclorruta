import React from "react";
import { LogBox } from 'react-native'
import { NativeBaseProvider, Text, Button, View, ScrollView } from "native-base";
import { API_KEY_GOOGLE_MAPS } from '../store/GoogleMaps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from "@react-navigation/native";


const Ruta = ({
    placeholderText
}) => {
    return(
        <View>
            <GooglePlacesAutocomplete
                placeholder={placeholderText}
                listViewDisplayed='auto'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: API_KEY_GOOGLE_MAPS,
                    language: 'es',
                }}
            />
        </View>
    )
}

const ChooseLocation = () => {

    LogBox.ignoreAllLogs()

    const navigation = useNavigation();

    const onDone = () => {
        navigation.goBack()
    }
    
    return(
    <NativeBaseProvider>
    <View padding={7}>
        <ScrollView 
            keyboardShouldPersistTaps="handled" 
        >
            <Ruta
                placeholderText= "Lugar inicial de la ruta"
            />
            <View style={{ marginBottom: 10 }} />
            <Ruta
                placeholderText= "Lugar final de la ruta"
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