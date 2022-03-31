import React from "react";
import { ScrollView, Center, Divider, Button, NativeBaseProvider, Text} from 'native-base'
import useAuth from "../hooks/useAuth";

export default function  MenUsuarioScreen ({navigation}) {

    const {auth, logout} = useAuth();

    return (
        <NativeBaseProvider>
        <Center>
            <ScrollView  maxW="300" _contentContainerStyle={{
                px: "20px",
                minW: "72",
                marginTop: "20"
            }}>
                <Divider my={3}></Divider>
                <Button 
                    size={"lg"} 
                    onPress={() => navigation.navigate('Perfil')}
                > Perfil </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"} 
                    onPress={() => navigation.navigate('Itinerarios')}
                > Itinerarios </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"} 
                    onPress={() => navigation.navigate('Grupos')}    
                > Grupos </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"} 
                    onPress={() => navigation.navigate('Reportes')} 
                > Reportes </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"} 
                    onPress={() => navigation.navigate('Map View')}    
                > Mapa Ciclorruta </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"}
                    onPress={() => navigation.navigate('Noticias')} 
                > Noticias </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"}
                    onPress={() => {
                        logout()
                        navigation.navigate('Login')
                    }} 
                > Cerrar Sesión </Button>
            </ScrollView>
        </Center>
        </NativeBaseProvider>
    )
}
