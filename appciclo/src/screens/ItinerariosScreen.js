import React from "react";
import { View, Button, Text } from "react-native";
import ItinerarioC from "../components/Itinerario";

function  ItinerarioScreen ({navigation}) {

    return (
    <View style={{padding: 12}}>
        <ItinerarioC></ItinerarioC>
        <View style={{padding:30}}>
                <Button 
                    title="Crear Itinerario"
                    e-round={10}
                    onPress={() => navigation.navigate('Crear Itinerario')}
                />
                <Text style={{fontSize:8}}/>
                <Button 
                    title="Chat del Grupo"
                    e-round={10}
                    onPress={() => navigation.navigate('Chat Grupo')}
                />
        </View>
    </View>
    )
}

export default ItinerarioScreen