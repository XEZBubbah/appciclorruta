import React from "react";
import { View, Button } from "react-native";
import GrupoTodos from "../components/AllGrupos";

function  GruposScreen ({navigation}) {

    return (
    <View style={{padding: 12}}>
        <GrupoTodos></GrupoTodos>
        <View style={{padding:30}}>
            <Button 
                title="Mis Grupos"
                e-round={10}
                onPress={() => navigation.navigate('Mis Grupos')}
            />
        </View>
    </View>
    )
}

export default GruposScreen