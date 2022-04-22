import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { URL } from "../store/GoogleMaps";
import { View, ActivityIndicator, ScrollView, StyleSheet} from "react-native";
import { Box, Text, Center, Divider, NativeBaseProvider, Pressable, HStack, Badge, Spacer} from 'native-base';
import useAuth from "../hooks/useAuth";
import axios from "axios";


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


export default function GrupoC (){  

    const navigation = useNavigation()

    const [state, setState] = useState({
        gruposUsuario: []
    })
    const { auth, onGroup, group } = useAuth();

    console.log(group)

    useEffect( async () => {
        const value = auth.userName;
        console.log('Hola '+ value)
        axios.post(URL+'/groupM/fetchUserGroupMov', {Usuario: value})
        .then(response => {
            console.log(response.data.result)
            setState({
                gruposUsuario: response.data.result
            })
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <View>
            { 
            state.gruposUsuario.length === 0 ? <ActivityIndicator color="black" size="large" style={[styles.container, styles.horizontal]} />:
            (<ScrollView
                horizontal= {false}
                showsVerticalScrollIndicator={false}
                style= {{height: 630}}
            >
                {
                    state.gruposUsuario.map((gruposUsuario, index) => (
                    <View key={index}>
                    <NativeBaseProvider>
                        <Center padding={2}>
                        <Box alignItems="center">
                        <Pressable 
                        onLongPress={() => {
                            onGroup({
                                Visibilidad: gruposUsuario.Visibilidad,
                                Nombre: gruposUsuario.Nombre_Grupo
                            })
                            navigation.navigate('Eliminar Grupo')
                        }}
                        onPress={() =>{
                            onGroup(gruposUsuario.Nombre_Grupo)
                            navigation.navigate('Itinerarios')
                        }}>
                        <Box width="340" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {gruposUsuario.Nombre_Grupo} 
                        </Text>
                        <Divider my={3}></Divider>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" width={100} _text={{
                            color: "white"
                            }} variant="solid" rounded="4">
                            <Text color={"white"}>{gruposUsuario.Visibilidad}</Text>
                            </Badge>
                            <Spacer />
                        </HStack>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            {gruposUsuario.Descripcion}
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

