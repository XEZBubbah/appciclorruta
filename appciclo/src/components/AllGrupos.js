import React, {useEffect, useState} from "react";
import { URL } from "../store/GoogleMaps";
import useAuth from "../hooks/useAuth";
import { View, ActivityIndicator, ScrollView, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, Center, Divider, NativeBaseProvider, Pressable, HStack, Badge, Spacer} from 'native-base';
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

export default function GrupoTodos() {  

    const { onGroup, auth } = useAuth('');

    const [state, setState] = useState({
        grupos: []
    })

    const navigation = useNavigation();

    useEffect( async () => {
        const value = auth.userName;
        axios.post(URL+'/groupM/fetchGroupMov', {Usuario: value})
        .then(response => {
            setState({
                grupos: response.data.result
            })
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <View>
            { 
            state.grupos.length === 0 ? <ActivityIndicator color="black" size="large" style={[styles.container, styles.horizontal]} />:
            (<ScrollView
                horizontal= {false}
                showsVerticalScrollIndicator={false}
                style= {{height: 630}}
            >
                {
                    state.grupos.map((grupos, index) => (
                    <View key={index}>
                    <NativeBaseProvider>
                        <Center padding={2}>
                        <Box alignItems="center">
                        
                        <Pressable onPress={() => {
                            if(grupos.Visibilidad === 'Publico'){
                                onGroup(grupos.Nombre_Grupo)
                                navigation.navigate("Publico")
                            }else{
                                onGroup(grupos.Nombre_Grupo)
                                navigation.navigate("Privado")
                            }
                        }}>
                        <Box width="340" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {grupos.Nombre_Grupo} 
                        </Text>
                        <Divider my={3}></Divider>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" width={100} _text={{
                            color: "white"
                            }} variant="solid" rounded="4">
                            <Text color={"white"}>{grupos.Visibilidad}</Text>
                            </Badge>
                            <Spacer />
                        </HStack>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            {grupos.Descripcion}
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

