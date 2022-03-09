import React from "react";
import { Text, StyleSheet,SafeAreaView, View, TextInput, Button, Alert } from "react-native";

function RecuperarContScreen({navigation}) {
    return (
        <SafeAreaView style= {{padding: 20, marginTop: 10}}>
            <Text  style= {{ fontSize: 18 }}> Ingresa el Correo Electronico </Text>
            <TextInput style={styles.input} />
            <Text style={{marginTop: 20}} />
            <Button
                title="Enviar"
                onPress={() => {{
                    Alert.alert('Se ha enviado el correo de confirmación!!')
                    navigation.navigate('Cambiar Contraseña')
                }}
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 30,
      marginTop: 10,
      borderWidth: 1,
    },
})

export default  RecuperarContScreen

