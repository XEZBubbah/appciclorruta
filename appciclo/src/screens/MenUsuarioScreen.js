import React, { useEffect } from "react";
import { ScrollView, Center, Divider, Button, NativeBaseProvider, Text} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';

function  MenUsuarioScreen ({navigation}) {

    const [name, setName] = React.useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        try {
            AsyncStorage.getItem('UserName')
                .then(value =>{
                    if (value != null){
                        setName(value)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <NativeBaseProvider>
        <Center>
            <ScrollView  maxW="300" _contentContainerStyle={{
                px: "20px",
                minW: "72",
                marginTop: "20"
            }}>
                <Text>{name}</Text>
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
            </ScrollView>
        </Center>
        </NativeBaseProvider>
    )
}

export default  MenUsuarioScreen