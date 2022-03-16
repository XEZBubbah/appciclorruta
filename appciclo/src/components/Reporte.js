import React, {Component} from "react";
import { View, ActivityIndicator, ScrollView, StyleSheet} from "react-native";
import { Box, Text, Center, Divider, NativeBaseProvider, Pressable, HStack, Badge, Spacer} from 'native-base';


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

class ReporteC extends Component {

    state = {
        reportes: [
            {
                "nombre": "Reporte 1", 
                "descripcion": "Grupo para jaksdsakbd kanskdbwwqug a d.snkjashsabsa ñlkoopre",
                "fecha":"Fecha", 
            },
            {
                "nombre": "Reporte 2", 
                "descripcion": "Grupo de opwqpujpwie  ieqho hdas lkasdhl asdiowqhjeahnewh",
                "fecha":"Fecha", 
            },
            {
                "nombre": "Reporte 3", 
                "descripcion": "iuowqhwequo wqj kas njajskhquoh kenrewujwerio er jweioh dm",
                "fecha":"Fecha",
            },
            {
                "nombre": "Reporte 4", 
                "descripcion": "Grupo kjuwquie wqoiuh ewqo aslnwq8dh dqwoi a sdljkashnwoaish",
                "fecha":"Fecha",
            },
        ]
    }
    render(){
    return (
        <View>
            { 
            this.state.reportes.length === 0 ? <ActivityIndicator color="black" size="large" style={[styles.container, styles.horizontal]} />:
            (<ScrollView
                horizontal= {false}
                showsVerticalScrollIndicator={false}
                style= {{height: 630}}
            >
                {
                    this.state.reportes.map((reportes, index) => (
                    <View key={index}>
                    <NativeBaseProvider>
                        <Center padding={2}>
                        <Box alignItems="center">
                        <Pressable onPress={() => console.log("I'm Pressed")}>
                        <Box width="340" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {reportes.nombre} 
                        </Text>
                        <Divider my={3}></Divider>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" width={100} _text={{
                            color: "white"
                            }} variant="solid" rounded="4">
                            <Text color={"white"}>{reportes.fecha}</Text>
                            </Badge>
                            <Spacer />
                        </HStack>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            {reportes.descripcion}
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
}

export default ReporteC