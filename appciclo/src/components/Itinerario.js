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

class ItinerarioC extends Component {

    state = {
        itinerarios: [
            {
            "nombre": "Salida Casual", 
            "descripcion": "Salida jashnbkjdasbskadjbdaskjbdaskjbaskdsbbsakasbkasjbd",
            "horaPartida":"10:00 a.m", 
            "horaLlegada": "11:00 a.m",
            },
            {
                "nombre": "Ruta Trabajo", 
                "descripcion": "Salida jashnbkjdasbskadjbdaskjbdaskjbaskdsbbsakasbkasjbd",
                "horaPartida":"9:00 a.m", 
                "horaLlegada": "10:00 a.m",
            },
            {
                "nombre": "Amigos Route", 
                "descripcion": "Salida jashnbkjdasbskadjbdaskjbdaskjbaskdsbbsakasbkasjbd",
                "horaPartida":"12:00 a.m", 
                "horaLlegada": "1:00 p.m",
            },
            {
                "nombre": "Ejercicio", 
                "descripcion": "Salida jashnbkjdasbskadjbdaskjbdaskjbaskdsbbsakasbkasjbd",
                "horaPartida":"8:00 p.m", 
                "horaLlegada": "9:00 p.m",
            },
        ]
    }
    render(){
    return (
        <View>
            { 
            this.state.itinerarios.length === 0 ? <ActivityIndicator color="black" size="large" style={[styles.container, styles.horizontal]} />:
            (<ScrollView
                horizontal= {false}
                showsVerticalScrollIndicator={false}
                style= {{height: 630}}
            >
                {
                    this.state.itinerarios.map((itinerarios, index) => (
                    <View key={index}>
                    <NativeBaseProvider>
                        <Center padding={2}>
                        <Box alignItems="center">
                        <Pressable onPress={() => console.log("I'm Pressed")}>
                        <Box width="340" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {itinerarios.nombre} 
                        </Text>
                        <Divider my={3}></Divider>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" width={170} _text={{
                            color: "white"
                            }} variant="solid" rounded="4">
                            <Text color={"white"}>{itinerarios.horaPartida} - {itinerarios.horaLlegada}</Text>
                            </Badge>
                            <Spacer />
                        </HStack>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            {itinerarios.descripcion}
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

export default ItinerarioC