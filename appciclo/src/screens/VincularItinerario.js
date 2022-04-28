import React from "react";
import { URL } from "../store/GoogleMaps";
import { Alert } from "react-native";
import { NativeBaseProvider, Center, Text, HStack, Button} from 'native-base';
import useAuth from "../hooks/useAuth";
import axios from "axios";

export default function VincularItinerario( {navigation} ) {

    const {auth, itinerario, group} = useAuth();
    console.log(group)

    function asingError(err){
        Alert.alert(
            'Tenemos un problema', 
            `${err}`,
            [
                {text: 'Ok'}
            ]
        );
    }

    const onUpdate = () => {
        navigation.navigate("Mis Grupos");
    }

    async function enviar() {
        const Usuario = auth.userName;
        console.log('Soy '+ Usuario);
        axios.post(URL+'/itineraryM/vinculateToItinerary', {Grupo: group, Usuario, Itinerario: itinerario})
        .then(function(response){
            console.log (response.data.message);
            onUpdate();
        }).catch(function(e){
            var err = Object.values(e.response.data)[0];
            asingError(err);
        })
    }       

    return (
        <NativeBaseProvider>
            <Center>
                <Text p={10}>¿Seguro que desea unirse al Itinerario?</Text>
                <HStack>
                    <Button marginRight={5} onPress={() => {
                        enviar()
                    }}>Aceptar</Button>
                    <Button onPress={() => {
                        navigation.goBack()
                    }}>Cancelar</Button>
                </HStack>
            </Center>
        </NativeBaseProvider>
    )
}
