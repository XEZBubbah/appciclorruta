import * as React from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Link, HStack, Text, Center} from 'native-base'
import MyDatePicker from "./../components/DatePicker";


function CrearUsuaScreen ({navigation}) {

    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Nombre</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Fecha de Nacimiento</FormControl.Label>
                    <MyDatePicker></MyDatePicker>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Contraseña</FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Confirmar Contraseña</FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('Login')}>
                    Crear Cuenta
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }}>
                    Ya tengo una cuenta.{" "}
                    </Text>
                    <Link _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                        }} onPress={() => navigation.navigate('Login')}>
                        Inciar Sesión
                    </Link>
                </HStack>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )
}


export default  CrearUsuaScreen