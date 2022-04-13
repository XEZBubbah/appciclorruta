import React from "react";
import { Button, Alert } from "react-native";
import { NativeBaseProvider, Box, VStack, FormControl, Input, Center, Text} from 'native-base'

function CambioContraScreen({navigation}) {
    return (
        <NativeBaseProvider>
            <Center w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                        <FormControl.Label>Contraseña Actual</FormControl.Label>
                        <Input type="password"/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Ingresa la nueva Contraseña</FormControl.Label>
                        <Input type="password"/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Confirmar la nueva Contraseña</FormControl.Label>
                        <Input type="password"/>
                    </FormControl>
                    <FormControl>
                    <Button
                        title="Confirmar Cambio"
                        onPress={() => {    
                            
                        }
                        }
                    />
                    </FormControl>
                
                </VStack>
            </Box>
        </Center>
        </NativeBaseProvider>
    )
}


export default  CambioContraScreen