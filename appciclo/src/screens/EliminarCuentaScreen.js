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
        axios.post(URL+'/userM/deleteUserAccount', {Usuario: value})
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
            <Center padding={5}>
                <Text p={4} fontSize= {16} bold={true}>¿Seguro que desea eliminar su cuenta?</Text>
                <Text p={3} fontSize= {14} textAlign={'justify'}>Si deseas eliminar tu cuenta, recuerda que no vas a poder acceder a los servicios
                    que ofrece BikeApp y que todos los datos relacionados a la cuenta (grupos, itinerarios) seran eliminados
                    del sistema.
                </Text>
                <Text />
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