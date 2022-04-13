import React from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, Alert, Text, Collapse} from 'native-base'



function RecuperarContScreen({navigation}) {
    const [show, setShow] = React.useState(false);
    return (
        <NativeBaseProvider>
            <Center w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Ingresa el Email de tu cuenta</FormControl.Label>
                        <Input />
                    </FormControl>
                </VStack>
                <Button mt="2" colorScheme="indigo" onPress={() => {
                        navigation.navigate('Cambiar Contraseña')
                    }
                }
                >
                    Enviar
                </Button>
                </Box>
            </Center>
        </NativeBaseProvider>
    )
}

export default  RecuperarContScreen

