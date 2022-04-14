import React, {useState, useEffect} from "react";
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

export default function ReporteC () {

    const [state, setState] = useState({
        reportesUsuario: []
    })
    const { auth } = useAuth();

    useEffect( async () => {
        const value = auth.userName;
        console.log('Hola '+ value)
        axios.post(URL+':5000/reportM/fetchReportMovil', {Usuario: value})
        .then(response => {
            console.log(response.data.result)
            setState({
                reportesUsuario: response.data.result
            })
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <View>
            { 
            state.reportesUsuario.length === 0 ? <ActivityIndicator color="black" size="large" style={[styles.container, styles.horizontal]} />:
            (<ScrollView
                horizontal= {false}
                showsVerticalScrollIndicator={false}
                style= {{height: 630}}
            >
                {
                    state.reportesUsuario.map((reportes, index) => (
                    <View key={index}>
                    <NativeBaseProvider>
                        <Center padding={2}>
                        <Box alignItems="center">
                        <Pressable onPress={() => console.log("I'm Pressed")}>
                        <Box width="340" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {reportes.Asunto} 
                        </Text>
                        <Divider my={3}></Divider>
                        <HStack alignItems="center">
                            {
                                reportes.Estado === 'N' ? (
                                    <Badge colorScheme="danger" width={300} _text={{
                                        color: "white"
                                        }} variant="solid" rounded="4">
                                        <Text color={"white"}>{reportes.Fecha_Generado.substring(0,10)+" - "+reportes.Tipo_Reporte}</Text>
                                    </Badge>
                                ): (
                                    console.log(' ')
                                )
                            }
                            {
                                reportes.Estado === 'P' ? (
                                    <Badge colorScheme="warning" width={300} _text={{
                                        color: "white"
                                        }} variant="solid" rounded="4">
                                        <Text color={"white"}>{reportes.Fecha_Generado.substring(0,10)+" - "+reportes.Tipo_Reporte}</Text>
                                    </Badge>
                                ): (
                                    console.log(' ')
                                )
                            }
                            {
                                reportes.Estado === 'F' ? (
                                    <Badge colorScheme="success" width={300} _text={{
                                        color: "white"
                                        }} variant="solid" rounded="4">
                                        <Text color={"white"}>{reportes.Fecha_Generado.substring(0,10)+" - "+reportes.Tipo_Reporte}</Text>
                                    </Badge>
                                ): (
                                    console.log(' ')
                                )
                            }
                            <Spacer />
                        </HStack>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            {reportes.Descripcion}
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

