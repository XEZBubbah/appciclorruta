import React from "react";
import { View, Button, Text } from "react-native";
import ItinerariosAll from "../components/ItinerariosAll";

export default function  ItinerarioAllScreen ({navigation}) {

    return (
    <View style={{padding: 12}}>
        <ItinerariosAll />
        <View style={{padding:30}}>
                <Button 
                    title="Mis Itinerarios"
                    e-round={10}
                    onPress={() => navigation.navigate('Mis Itinerarios')}
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
