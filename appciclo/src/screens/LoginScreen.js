import * as React from "react";
import { Image } from "react-native";
import { Button, NativeBaseProvider, Center,Heading, Box, VStack, FormControl, Input, Link, HStack, Text, Divider} from 'native-base'


function LoginScreen ({navigation}) {
    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Image 
                style={{ width: 130, height: 130, alignSelf:"center"}}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1059/1059475.png?w=740' }}
            ></Image>
            <Text></Text>
            <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50",
                alignSelf: "center",
            }}>
                BikeApp
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Inicia Sesión para continuar
            </Heading>

                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Contraseña</FormControl.Label>
                    <Input type="password" />
                    <Link _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500"
                    }} alignSelf="flex-end" mt="1"
                    onPress={() => navigation.navigate('Recuperar Contraseña')}>
                    ¿Recuperar Contraseña?
                    </Link>
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('Menú Usuario')}>
                    Iniciar Sesión
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }}>
                    Soy nuevo usuario.{" "}
                    </Text>
                    <Link _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                        }} onPress={() => navigation.navigate('Crear Usuario')}>
                        Registrarme
                    </Link>
                </HStack>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )
}


export default LoginScreen