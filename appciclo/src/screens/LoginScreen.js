import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

const  LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset = {{ top: 'always'}}>
            <Text style= {{ fontSize: 30 }}>  </Text>
            <Text  style= {{ fontSize: 20 }}> Menú Usuario </Text>
        </SafeAreaView>
    )
}

export default LoginScreen