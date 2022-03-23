import * as React from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Link, HStack, Text, Center} from 'native-base'
import DatePicker from "./../components/DatePicker";
import { useFormik }  from 'formik';
import * as Yup from 'yup';
import axios from "axios";


function CrearUsuaScreen ({navigation}) {
    
        const onSingup = () => {
            navigation.navigate('Login')
        };
    
        const formik = useFormik({
            initialValues: initialValues(),
            validationSchema: Yup.object(validationSchema()),
            validateOnChange: false,
            onSubmit: async (formValue) => {
                try {
                    console.log(formValue);
                    const {data} = await axios.post('http://192.168.1.3:5000/userM/signupMov', {...formValue});
                    console.log ("Datos enviados ..");
                    onSingup();
                }
                
                catch (error) {
                    console.log(error)
                }
            },
        });

    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Nombre</FormControl.Label>
                    <Input 
                        value={formik.values.firstName}
                        onChangeText={(text) => formik.setFieldValue("firstName", text)} 
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Apellido</FormControl.Label>
                    <Input 
                        value={formik.values.lastName}
                        onChangeText={(text) => formik.setFieldValue("lastName", text)} 
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Fecha de Nacimiento</FormControl.Label>
                    <DatePicker></DatePicker>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input 
                        value={formik.values.email}
                        onChangeText={(text) => formik.setFieldValue("email", text)}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Contraseña</FormControl.Label>
                    <Input 
                        type="password" 
                        value={formik.values.password}    
                    />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => 
                    formik.handleSubmit()
                }>
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
                        }} onPress={() => this.props.nom.navigate('Login')}>
                        Inciar Sesión
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
        firstName: "", 
        lastName: "",
        userName: "",
        birthDate: null,
        phone: "",
        email: "", 
        password: ""
    }
}

function validationSchema(){
    return {
        firstName: Yup.string().required("Este campo no se puede dejar vacio"),
        lastName: Yup.string().required("Este campo no se puede dejar vacio"),
        userName: Yup.string().required("Este campo no se puede dejar vacio"),
        birthDate: Yup.date().required("Este campo no se puede dejar vacio").nullable(),
        phone: Yup.string().required("Este campo no se puede dejar vacio"),
        email: Yup.string().required("Ingrese un email").email("Email invalido"),
        password: Yup.string().required("Ingrese una contraseña")
    }
}


export default  CrearUsuaScreen