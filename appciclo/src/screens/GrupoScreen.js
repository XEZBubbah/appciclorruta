import React from "react";
import { View, Button } from "react-native";
import GrupoC from "../components/Grupo";


function  GrupoScreen ({navigation}) {

    return (
    <View style={{padding: 12}}>
        <GrupoC></GrupoC>
        <View style={{padding:30}}>
            <Button 
                title="Crear Grupo"
                e-round={10}
                onPress={() => navigation.navigate('Crear Grupo')}
            />
        </View>
    </View>
    )
}

export default GrupoScreen