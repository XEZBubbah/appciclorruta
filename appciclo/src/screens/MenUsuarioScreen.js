import React, {useEffect}from "react";
import { URL } from "../store/GoogleMaps";
import { ScrollView, Center, Divider, Button, NativeBaseProvider} from 'native-base'
import useAuth from "../hooks/useAuth";
import axios from "axios";

export default function  MenUsuarioScreen ({navigation}) {

    const {auth, logout, asingIdUser} = useAuth();
    
    useEffect( async () => {
        const value = auth.userName;
        console.log('Hola '+ value)
        axios.post(URL+'/userM/fetchUserInfo', {Usuario: value})
        .then(response => {
            console.log("Id: "+response.data.result._id)
            asingIdUser(response.data.result._id)
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

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
                    onPress={() => navigation.navigate('Grupos')}    
                > Grupos </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"} 
                    onPress={() => navigation.navigate('Reportes')} 
                > Reporte de Errores </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"} 
                    onPress={() => navigation.navigate('Map Cicloruta')}    
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
                > Cerrar Sesi??n </Button>
            </ScrollView>
        </Center>
        </NativeBaseProvider>
    )
}
