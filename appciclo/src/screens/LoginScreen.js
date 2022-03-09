import * as React from "react";
import { Text, StyleSheet,Image, View, TextInput, Button, Alert } from "react-native";


function LoginScreen ({navigation}) {
        return (
            <View style= {{padding: 50, marginTop: 30}}>
                <Image 
                    style={{ width: 130, height: 130, alignSelf:"center"}}
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1059/1059475.png?w=740' }}
                ></Image>
                <Text style= {{ fontSize: 20, padding: 10, color: '#808080', fontFamily: 'sans-serif', alignSelf:"center" }}> BikeApp </Text>
                <Text style= {{ fontSize: 35, marginTop: 30, fontWeight: 'bold'}}> Inicia Sesión </Text>
                <Text style= {{ fontSize: 15, marginTop: 5, color: '#808080', fontStyle:"italic"}}> Inicia sesión para usar la app </Text>
                <Text style= {{ marginTop: 20, marginLeft: 10}}>Correo Electronico</Text>
                <TextInput keyboardType="email-address" style={styles.input}> </TextInput>
                <Text style= {{ marginTop: 5, marginLeft: 10}}>Contraseña</Text>
                <TextInput secureTextEntry= {true} style={styles.input}></TextInput>
                <Button
                    title="Iniciar Sesión"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
                <Text 
                    onPress={() => navigation.navigate('Recuperar Contraseña')}
                    style= {{marginTop: 20, color: '#0000ff'}}
                    color= '#0000ff'
                >
                    ¿Olvidaste la Contraseña? </Text>
                <Text 
                    onPress={() => navigation.navigate('Crear Usuario')}
                    style= {{marginTop: 5, color: '#0000ff'}}
                    color= '#0000ff'
                > 
                    Crear Cuenta </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      
    },
  });

export default LoginScreen