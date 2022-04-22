import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, ScrollView, StyleSheet} from "react-native";
import { Box, Text, Center, Divider, NativeBaseProvider, Pressable, HStack, Badge, Spacer} from 'native-base';
import { URL } from "../store/GoogleMaps";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import axios from "axios";


export default function ItinerarioC() {

    const navigation = useNavigation();
    const { auth, group, onItinerario } = useAuth();
    const [state, setState] = useState({
        itinerarios: []
    })

    useEffect( async () => {
        const value = auth.userName;
        console.log('Hola '+ value)
        axios.post(URL+'/itineraryM/getUserItineraries', {Usuario: value, Grupo: group})
        .then(response => {
            console.log(response.data.result)
            setState({
                itinerarios: response.data.result
            })
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <View>
            { 
            state.itinerarios.length === 0 ? <ActivityIndicator color="black" size="large" style={[styles.container, styles.horizontal]} />:
            (<ScrollView
                horizontal= {false}
                showsVerticalScrollIndicator={false}
                style= {{height: 600}}
            >
                {
                    state.itinerarios.map((itinerarios, index) => (
                    <View key={index}>
                    <NativeBaseProvider>
                        <Center padding={2}>
                        <Box alignItems="center">
                        <Pressable 
                            onLongPress={() => {
                                onItinerario(itinerarios.Nombre_Itinerario)
                                navigation.navigate('Eliminar Itinerario')
                            }}
                            onPress={() => console.log("I'm Pressed")}>
                        <Box width="340" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {itinerarios.Nombre_Itinerario} 
                        </Text>
                        <Divider my={3}></Divider>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" width={170} _text={{
                            color: "white"
                            }} variant="solid" rounded="4">
                            <Text color={"white"}>{itinerarios.Hora_Salida} - {itinerarios.Hora_Llegada}</Text>
                            </Badge>
                            <Spacer />
                        </HStack>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            {itinerarios.Descripcion}
                        </Text>
                        </Box>
                        </Pressable>
                        </Box>
                        </Center>
                    </NativeBaseProvider>
                    </View>
                    ))
                }
            </ScrollView>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      padding: 5
    }
});