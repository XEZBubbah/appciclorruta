import * as React from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Link, HStack, Text, Center, ScrollView, Image ,Divider} from 'native-base'
import { useState } from 'react'
import { View } from "react-native";
import { URL } from "../store/GoogleMaps";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFormik }  from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';

let fecha = "";

function DatePickerComp() {

    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('Empty');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false); 
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
        
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      setText(fDate);

      fecha = tempDate;
      console.log(fecha);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    return (
      <View>
        <Button onPress = {showDatepicker}> Selecciona una fecha </Button> 
        <Text style={{alignSelf:"center"}}> {text}</Text>
        {
        show && 
        (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                display='default'
                onChange={onChange}
            />
        )
        }
      </View>
      
    );
};

export default function CrearUsuaScreen ({navigation}) {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
    
    const onSingup = () => {
        navigation.navigate('Login')
    };

    function asingError(err){
        Alert.alert(
            'Tenemos un problema', 
            `${err}`,
            [
                {text: 'Ok'}
            ]
        );
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
            onSubmit: async (formValue) => {
                var birthDate = fecha;
                console.log('Entre: ' +birthDate);
                console.log(formValue);
                axios.post(URL+':5000/userM/signupMov', {...formValue, birthDate})
                .then(function(response){
                    console.log (response.data.message);
                    onSingup();
                }).catch(function(e){
                    var err = Object.values(e.response.data)[0];
                    asingError(err);
                })
            }
        });

    return (
       
        <NativeBaseProvider>
        <ScrollView maxW="400" h="80">
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Nombre</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.firstName}</Text>
                    <Input 
                        value={formik.values.firstName}
                        onChangeText={(text) => formik.setFieldValue("firstName", text)} 
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Apellido</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.lastName}</Text>
                    <Input 
                        value={formik.values.lastName}
                        onChangeText={(text) => formik.setFieldValue("lastName", text)} 
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Username</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.userName}</Text>
                    <Input 
                        autoCapitalize="none"
                        value={formik.values.userName}
                        onChangeText={(text) => formik.setFieldValue("userName", text)} 
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Fecha de Nacimiento</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.birthDate}</Text>
                    <DatePickerComp></DatePickerComp>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.email}</Text>
                    <Input 
                        value={formik.values.email}
                        onChangeText={(text) => formik.setFieldValue("email", text)}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Número Celular</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.phone}</Text>
                    <Input 
                        value={formik.values.phone}
                        onChangeText={(text) => formik.setFieldValue("phone", text)}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Contraseña</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.password}</Text>
                    <Input 
                        type="password" 
                        value={formik.values.password}
                        onChangeText={(text) => formik.setFieldValue("password", text)}    
                    />
                </FormControl>
                <Divider my={3}/>
                <FormControl>
                    <Button onPress={pickImage} > Imagen de Perfil </Button>
                    <Divider my={3}/>
                    <Center>
                        {image && <Image alt="fotoPerfil" source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 20 }} />}
                    </Center>
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
                        }} onPress={() => navigation.navigate('Login')}>
                        Inciar Sesión
                    </Link>
                </HStack>
                </VStack>
            </Box>
            </Center>
        </ScrollView>
        </NativeBaseProvider>
    )
}


function initialValues(){
    return {
        firstName: "", 
        lastName: "",
        userName: "",
        phone: "",
        email: "", 
        password: "",
    }
}

function validationSchema(){
    return {
        firstName: Yup.string().required("Este campo no se puede dejar vacio"),
        lastName: Yup.string().required("Este campo no se puede dejar vacio"),
        userName: Yup.string().required("Este campo no se puede dejar vacio"),
        phone: Yup.number().required("Este campo no se puede dejar vacio"),
        email: Yup.string().required("Ingrese un email").email("Email invalido"),
        password: Yup.string().required("Ingrese una contraseña")
    }
}
