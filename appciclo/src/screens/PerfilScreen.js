import React, { useEffect, useState, } from "react";
import { Alert } from "react-native";
import { Text, Center,Image, Divider, Link, NativeBaseProvider, Heading, ScrollView, Box} from 'native-base';
import { URL } from "../store/GoogleMaps";
import ItinerarioC from "../components/Itinerario";
import useAuth from "../hooks/useAuth";
import GrupoC from "../components/Grupo";
import axios from "axios";

export default function  PerfilScreen ({navigation}) {

    const [state, setState] = useState({
        infoUsuario: []
    })
    const { auth } = useAuth();

    function asingError(err){
        Alert.alert(
            'Tenemos un problema', 
            `${err}`,
            [
                {text: 'Ok'}
            ]
        );
    }
    
    useEffect( async () => {
        const value = auth.userName;
        axios.post(URL+'/userM/fetchUserInfo', {Usuario: value})
        .then(response => {
            setState({
                infoUsuario: response.data.result
            })
        })
        .catch(e => {
            var err = Object.values(e.response.data)[0];
            console.log(err);
            asingError(err);
        })
    }, []);


    return (
        <NativeBaseProvider>
        <Center style={{padding: 30}}>
        <Image size={100} resizeMode={"contain"} borderRadius={250} source={{
            uri: 'https://wallpaperaccess.com/full/1672521.jpg'
            }} alt="Foto Perfil" />
        <Heading size={"lg"}> {state.infoUsuario.Nombre} {state.infoUsuario.Apellido} </Heading>
        <Text> {state.infoUsuario.Correo} </Text>
        <Link _text={{
            fontSize: "sm",
            fontWeight: "500",
            color: "indigo.500"
            }}
                onPress={() => navigation.navigate('Cambiar Contraseña')}>
                Cambiar Contraseña
        </Link>
        <Link _text={{
            fontSize: "sm",
            fontWeight: "500",
            color: "indigo.500"
            }}
                onPress={() => navigation.navigate('Editar Cuenta')}>
                Editar Usuario
        </Link>
        <Link _text={{
            fontSize: "sm",
            fontWeight: "500",
            color: "indigo.500"
            }}
                onPress={() => navigation.navigate('Eliminar Cuenta')}>
                Eliminar Cuenta
        </Link>
        <Divider my={2}></Divider>
        <Box backgroundColor={"blue.300"} w={340}>
            <Center>
                <Heading size='md'>Grupos</Heading>
            </Center>
        </Box>
        <ScrollView h={430}>
            <GrupoC></GrupoC>
        </ScrollView>
        </Center>
        </NativeBaseProvider>
    )
}
