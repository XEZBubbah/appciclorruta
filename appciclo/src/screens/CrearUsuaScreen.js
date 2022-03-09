import * as React from "react";
import { Text, StyleSheet,SafeAreaView, View, TextInput, Button, Alert } from "react-native";
import MyDatePicker from "./../components/DatePicker";

const Separator = () => (
    <View style={styles.separator} />
);


function CrearUsuaScreen ({navigation}) {

    return (
        <SafeAreaView style= {{padding: 30,marginTop: 5}}>
            <Text style= {{fontSize: 16}}> Nombre </Text>
            <TextInput style={styles.input} />
            <Separator/>
            <Text style= {{fontSize: 16}}> Apellido </Text>
            <TextInput style={styles.input} />
            <Separator/>
            <Text style= {{fontSize: 16}}> Fecha de Nacimiento </Text>
            <MyDatePicker/>
            <Separator/>
            <Text style= {{fontSize: 16}}> Correo Electronico </Text>
            <TextInput style={styles.input} />
            <Separator/>
            <Text style= {{fontSize: 16}}> Contraseña </Text>
            <TextInput secureTextEntry={true} style={styles.input} />
            <Separator/>
            <Text style= {{fontSize: 16}}> Confirmar Contraseña </Text>
            <TextInput secureTextEntry={true} style={styles.input} />
            <Separator/>
            <Button
                style ={{marginTop: 50}}
                title="Crear Cuenta"
                onPress={() => {{
                    Alert.alert('Cuenta Creada con Exito!!!')
                    navigation.navigate('Login')
                }}     
                }
            />
            <Text 
                onPress={() => navigation.navigate('Login')}
                style= {{marginTop: 30, fontWeight: "bold", color: '#0000ff', alignSelf: "center"}}
                color= '#0000ff'
                
            > 
                Ya tengo una cuenta :) </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 30,
      margin: 8,
      borderWidth: 1,
      padding: 5,
      
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });

export default  CrearUsuaScreen