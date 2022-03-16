import * as React from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, TextArea, Radio, Stack} from 'native-base'


function CrearReporteScreen ({navigation}) {

    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Asunto</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Descripción</FormControl.Label>
                    <TextArea h={150} placeholder="Descrición del Reporte" width={275} />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('Reportes')}>
                    Crear Reporte
                </Button>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )
}


export default  CrearReporteScreen