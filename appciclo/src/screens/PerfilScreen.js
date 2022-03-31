import React from "react";
import { Text, Center,Image, Divider, Link, NativeBaseProvider, Heading, ScrollView, Box} from 'native-base';
import GrupoC from "../components/Grupo";

function  PerfilScreen ({navigation}) {

    return (
        <NativeBaseProvider>
        <Center style={{padding: 30}}>
        <Image size={100} resizeMode={"contain"} borderRadius={250} source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} alt="Alternate Text" />
        <Heading size={"lg"}>Javier Parra</Heading>
        <Text>correo12@hotmail.com</Text>
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
                onPress={() => navigation.navigate('Eliminar Cuenta')}>
                Eliminar Cuenta
        </Link>
        <Divider my={4}></Divider>
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

export default  PerfilScreen