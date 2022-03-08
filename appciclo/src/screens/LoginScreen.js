import React, { Component } from "react";
import { Text, StyleSheet,Image, View, TextInput } from "react-native";

class LoginScreen extends Component {
    render(){
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
                <TextInput autoComplete="email" style={styles.input}> </TextInput>
                <Text style= {{ marginTop: 5, marginLeft: 10}}>Contraseña</Text>
                <TextInput autoComplete="password" style={styles.input}> </TextInput>
            </View>
        )
    }
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