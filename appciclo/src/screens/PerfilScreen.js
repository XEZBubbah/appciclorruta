import React, { useEffect, useState } from "react";
import { Text, Center,Image, Divider, Link, NativeBaseProvider, Heading, ScrollView, Box} from 'native-base';
import useAuth from "../hooks/useAuth";
import GrupoC from "../components/Grupo";
import axios from "axios";

export default function  PerfilScreen ({navigation}) {

    const [state, setState] = useState({
        infoUsuario: []
    })
    const { auth } = useAuth();

    useEffect( async () => {
        const value = auth.userName;
        console.log('Hola '+ value)
        axios.post('http://192.168.1.3:5000/userM/fetchUserInfo', {Usuario: value})
        .then(response => {
            console.log(response.data.result)
            setState({
                infoUsuario: response.data.result
            })
        })
        .catch(error => {
            console.log(error);
        })
    }, []);


    return (
        <NativeBaseProvider>
        <Center style={{padding: 30}}>
        <Image size={100} resizeMode={"contain"} borderRadius={250} source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} alt="Alternate Text" />
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
        <ScrollView h={230}>
            <GrupoC></GrupoC>
        </ScrollView>
        <Box backgroundColor={"blue.300"} w={340}>
            <Center>
                <Heading size='md'>Itinerarios</Heading>
            </Center>
        </Box>
        <ScrollView h={230}>
            <GrupoC></GrupoC>
        </ScrollView>
        </Center>
        </NativeBaseProvider>
    )
}
