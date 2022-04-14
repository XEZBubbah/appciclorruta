import React from "react";
import { Text, Center, NativeBaseProvider, Button, HStack} from 'native-base';
import useAuth from "../hooks/useAuth";
import { URL } from "../store/GoogleMaps";
import axios from "axios";

export default function EliminarCuenta ({navigation}){

    const { auth,logout} = useAuth('');

    function salir() {
        console.log('Saliendo ...')
        logout()
        navigation.navigate('Login')
    }

    async function eliminar () {
        var value = auth.userName 
        console.log('Soy: '+ value)
        axios.post(URL+':5000/userM/deleteUserAccount', {Usuario: value})
        .then(response => {
            console.log(response.data);
            salir();
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <NativeBaseProvider>
            <Center>
                <Text p={10}>¿Seguro que desea eliminar su cuenta?</Text>
                <HStack>
                    <Button marginRight={5}  onPress={() => {
                        eliminar()
                    }}>Aceptar</Button>
                    <Button onPress={() => {
                        navigation.navigate('Perfil')
                    }}>Cancelar</Button>
                </HStack>
            </Center>
        </NativeBaseProvider>
    )
}