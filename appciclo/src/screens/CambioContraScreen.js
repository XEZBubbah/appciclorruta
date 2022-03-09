import React from "react";
import { Text, StyleSheet,SafeAreaView, View, TextInput, Button, Alert } from "react-native";

function CambioContraScreen({navigation}) {
    return (
        <SafeAreaView style= {{padding: 20, marginTop: 10}}>
            <Text  style= {{ fontSize: 18 }}> Ingresa la nueva Contraseña </Text>
            <TextInput style={styles.input} />
            <Text  style= {{ fontSize: 18, marginTop: 20 }}> Confirmar nueva Contraseña </Text>
            <TextInput style={styles.input} />
            <Text style={{marginTop: 10}} />
            <Button
                title="Confirmar Cambio"
                onPress={() => {
                    Alert.alert(
                        '¿Confirmar Cambio de Contraseña?',
                        "",
                        [
                            {
                                text: 'Cancelar',
                            },
                            {
                                text: 'Confirmar',
                                onPress: () => navigation.navigate('Login')
                            }
                        ]
                    )
                    
                }
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

export default  CambioContraScreen