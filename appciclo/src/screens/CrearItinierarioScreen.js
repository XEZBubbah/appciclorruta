import * as React from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, TextArea,Text} from 'native-base'
import TimePicker from "../components/TimePicker";


function CrearItinerarioScreen ({navigation}) {

    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Nombre Itinerario</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Hora Inicio</FormControl.Label>
                    <TimePicker></TimePicker>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Hora Fin</FormControl.Label>
                    <TimePicker></TimePicker>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Descripción</FormControl.Label>
                    <TextArea h={150} placeholder="Descrición del Itinerario" width={275} />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('Itinerarios')}>
                    Crear Itinerario
                </Button>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )
}


export default  CrearItinerarioScreen