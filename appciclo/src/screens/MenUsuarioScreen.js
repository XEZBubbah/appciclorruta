import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, StyleSheet } from "react-native";

const  MenUsuarioScreen = ({ navigation }) => {

    return (
        <SafeAreaView forceInset = {{ top: 'always'}}>
            <Text style= {{ fontSize: 40 }}> Menú Usuario </Text>
        </SafeAreaView>
    )
}

export default  MenUsuarioScreen