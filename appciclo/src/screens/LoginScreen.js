import * as React from "react";
import { Image } from "react-native";
import { Button, NativeBaseProvider, Center,Heading, Box, VStack, FormControl, Input, Link, HStack, Text} from 'native-base'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LoginScreen ({navigation}) {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log ("Datos enviados ..");
            console.log(formValue);
        },
    });

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
                    <Text fontSize={"12"} color={"danger.500"}>{formik.errors.email}</Text>
                    <Input 
                        value={formik.values.email}
                        onChangeText={(text) => formik.setFieldValue("email", text)} 
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Contraseña</FormControl.Label>
                    <Text fontSize={"12"} color={"danger.500"}>{formik.errors.password}</Text>
                    <Input 
                        type="password" 
                        value={formik.values.password}
                        onChangeText={(text) => formik.setFieldValue("password", text)}
                    />
                    <Link _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500"
                    }} alignSelf="flex-end" mt="1"
                    onPress={() => navigation.navigate('Recuperar Contraseña')}>
                    ¿Recuperar Contraseña?
                    </Link>
                </FormControl>
                
                <Button mt="2" colorScheme="indigo" onPress={() =>   
                    formik.handleSubmit()
                }
                
                >
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

function initialValues(){

    return {
        email: "",
        password: ""
    }
}

function validationSchema(){
    return {
        email: Yup.string().required("Ingrese un email"),
        password: Yup.string().required("Ingrese una contraseña"), 
    }
}


export default LoginScreen