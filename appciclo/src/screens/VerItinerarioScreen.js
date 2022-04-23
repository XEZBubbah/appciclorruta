import React , { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { URL } from "../store/GoogleMaps";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import MapCicloRutaItinerario from "../components/MapCiclo";
import { Button, NativeBaseProvider, Center, Heading, Box, VStack, Divider, Badge, Text, View} from 'native-base'
import axios from "axios";


export default function VerItinerarioScreen () {

    const navigation = useNavigation();

    const { auth, group, itinerario, putI, putL } = useAuth();

    const [state, setState] = useState({
        infoItinerario: [],
    })

    useEffect(async () => {
        const value = auth.userName;
        console.log('Hola '+ value)
        axios.post(URL+'/itineraryM/getUserItinerary', {Usuario: value, Grupo: group, Itinerario: itinerario})
        .then(response => {
            console.log(response.data.result)
            putI(response.data.result.Punto_Partida);
            putL(response.data.result.Punto_Llegada);
            setState({
                infoItinerario: response.data.result
            });
        })
        .catch(e => {
            console.log(e);
            var err = Object.values(e.response.data);
            asingError(err);
        })
    }, []);

    function asingError(err){
        respuesta = err;
        Alert.alert(
            'Tenemos un problema', 
            `${respuesta}`,
            [
                {text: 'Ok'}
            ]
        );
    }
    
    const onEditar = () => {
        navigation.navigate('Menú Usuario')
    };

    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea py="8" w="100%" maxW="320">
            <Heading size="lg" fontWeight="800"  color="dark.100" textAlign={'center'} 
            _dark={{
                color: "warmGray.50",
                alignSelf: "center",
            }}>
                {state.infoItinerario.Nombre_Itinerario}
            </Heading>
            <Heading mt="1" paddingBottom={3} paddingTop={3} _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                {state.infoItinerario.Descripcion}
            </Heading>
            <Divider bg="indigo.500" thickness="2" orientation="horizontal" />
            <Text fontSize={5}></Text>
            <Badge colorScheme="darkBlue" 
                _text={{
                color: "white"
                }} variant="solid" rounded="4">
                <Text color={"white"}> {state.infoItinerario.Hora_Salida} - {state.infoItinerario.Hora_Llegada} </Text>
            </Badge>
            <Text fontSize={5}></Text>
            <Divider bg="indigo.500" thickness="2" orientation="horizontal" />
            <Button mt="2" onPress={() => { navigation.navigate('Ruta Itinerario') }}> Ver Ruta </Button>
            <View height={350}>
                <MapCicloRutaItinerario/>
            </View>
            <VStack space={3} paddingTop={10} mt="5">
                <Button mt="2" colorScheme="indigo" onPress={() => {navigation.navigate('Editar Itinerario')}}> Editar Itinerario </Button>
            </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )
}

