import React, { useState } from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, ScrollView, Stack, Checkbox, Text} from 'native-base';
import { useFormik }  from 'formik';
import useAuth from "../hooks/useAuth";
import axios from "axios";



export default function EditarUsuario ({navigation}) {
    
        const { auth,logout } = useAuth();
        const [ checkUsername, setcheckUsername ] = useState(false);
        const [ checkEmail, setcheckEmail ] = useState(false);
        const [ checkPhone, setcheckPhone  ] = useState(false);
        const [ error, setError ] = useState('');

        const onUpdate = () => {
            logout()
            navigation.navigate('Login')
        };

        const formik = useFormik({
            initialValues: initialValues(),
            validateOnChange: false,
            onSubmit: async (formValue) => {
                try {
                    var userNameOld = auth.userName;
                    const {data} = await axios.post('http://192.168.1.7:5000/userM/modifyUserInfo', {...formValue, userNameOld});
                    console.log ("Datos enviados .." + Object.values(data));
                    setError(Object.values(data));
                    if(error === ''){
                        onUpdate();
                    }else{
                        console.log('Error: '+error);
                        alert(error);
                    }
                } 
                catch (error) {
                    console.log(error)
                }
            },
        });

    return (
       
        <NativeBaseProvider>
        <ScrollView maxW="400" h="80">
        <Center>
            <Stack p={6} direction={{
            base: "row",
            md: "row" 
            }} space={2} alignItems="flex-start">
                <Checkbox value="purple" colorScheme="danger" isChecked={checkUsername} onChange={() => setcheckUsername(!checkUsername)} >
                    Username
                </Checkbox>
                <Checkbox value="purple" colorScheme="purple" isChecked={checkEmail} onChange={() => setcheckEmail(!checkEmail)}>
                    Email
                </Checkbox>
                <Checkbox value="purple" colorScheme="orange" isChecked={checkPhone} onChange={() => setcheckPhone(!checkPhone)}>
                    Número Celular
                </Checkbox>
            </Stack>
        </Center>
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290">
                <VStack space={3} mt="5">
                {
                    checkUsername === true ? (
                        <FormControl>
                        <FormControl.Label>Username</FormControl.Label>
                        <Input 
                            autoCapitalize="none"
                            value={formik.values.userNameNew}
                            onChangeText={(text) => formik.setFieldValue("userNameNew", text)} 
                        />
                        </FormControl>
                    ) : (
                        console.log('Hola :)')
                    )
                }
                {
                    checkEmail === true ? (
                    <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                        <Input 
                            value={formik.values.email}
                            onChangeText={(text) => formik.setFieldValue("email", text)}
                        />
                    </FormControl>
                    ): (
                        console.log('Sayonaraaaa ...')
                    )
                }
                {
                    checkPhone === true ? (
                    <FormControl>
                        <FormControl.Label>Número Celular</FormControl.Label>
                        <Input 
                            value={formik.values.phone}
                            onChangeText={(text) => formik.setFieldValue("phone", text)}
                        />
                    </FormControl>
                    ):(
                        console.log('Abrigadhooo ...')
                    )
                }
                <Button mt="2" colorScheme="indigo" onPress={() =>
                    formik.handleSubmit()
                }>
                    Editar Cuenta
                </Button>
                <Text fontSize={"12"} color={"danger.500"}>{error}</Text>
                </VStack>
            </Box>
        </Center>
        </ScrollView>
        </NativeBaseProvider>
    )
}

function initialValues(){
    return {
        userNameNew: "",
        phone: "",
        email: "", 
    }
}

