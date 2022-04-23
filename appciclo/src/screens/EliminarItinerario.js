import React from "react";
import { Alert } from "react-native";
import { Text, Center, NativeBaseProvider, Button, HStack} from 'native-base';
import useAuth from "../hooks/useAuth";
import { URL } from "../store/GoogleMaps";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


export default function EliminarItinerario (){

    const navigation = useNavigation();
    const { auth, itinerario, group} = useAuth('');

    function salir() {
        console.log('Saliendo ...')
        navigation.navigate('Mis Grupos')
    }

    function asingError(err){
        Alert.alert(
            'Tenemos un problema', 
            `${err}`,
            [
                {text: 'Ok'}
            ]
        );
    }

    async function eliminar () {
        var value = auth.userName 
        console.log('Soy: '+ value)
        axios.post(URL+'/itineraryM/deleteItinerary', { Usuario: value, Grupo: group, Itinerario: itinerario })
        .then(response => {
            console.log(response.data);
            salir();
        })
        .catch(e => {
            var err = Object.values(e.response.data)[0];
            console.log(err);
            asingError(err);
        })
    }

    return(
        <NativeBaseProvider>
            <Center>
                <Text p={10}>¿Seguro que desea eliminar este Itinerario?</Text>
                <HStack>
                    <Button marginRight={5} onPress={() => {
                        eliminar()
                    }}>Aceptar</Button>
                    <Button onPress={() => {
                        navigation.navigate('Itinerarios')
                    }}>Cancelar</Button>
                </HStack>
            </Center>
        </NativeBaseProvider>
    )
}