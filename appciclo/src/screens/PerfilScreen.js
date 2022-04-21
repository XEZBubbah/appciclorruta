import React, { useEffect, useState, } from "react";
import { Text, Center,Image, Divider, Link, NativeBaseProvider, Heading, ScrollView, Box} from 'native-base';
import { URL } from "../store/GoogleMaps";
import useAuth from "../hooks/useAuth";
import GrupoC from "../components/Grupo";
import axios from "axios";
import { Buffer } from "Buffer";

export default function  PerfilScreen ({navigation}) {

    globalThis.Buffer = Buffer;

    const [state, setState] = useState({
        infoUsuario: []
    })
    const { auth } = useAuth();

    const [ imgUrl, setImgUrl ] = useState('');

    async function fetchImg(value){
        axios.post(URL+':5000/userM/fetchUserAvatar', {Usuario: value})
        .then(response =>{
            setImgUrl('data:image/jpg;base64,'+response.data.result.Avatar)
            console.log('Hola '+imgUrl)
        }).catch(e =>{
            console.log(e);
        })
    }
    
    useEffect( async () => {
        const value = auth.userName;
        fetchImg(value);
        axios.post(URL+':5000/userM/fetchUserInfo', {Usuario: value})
        .then(response => {
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
            uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fappciclo-812f3752-c1a9-4b10-9369-550851a5ba47/ImagePicker/214d08c4-609b-4db3-9aa3-634854cca1e6.jpg'
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
