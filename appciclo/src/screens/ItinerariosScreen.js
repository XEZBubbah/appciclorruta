import React from "react";
import { View, Button } from "react-native";
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
        </View>
    </View>
    )
}

export default ItinerarioScreen