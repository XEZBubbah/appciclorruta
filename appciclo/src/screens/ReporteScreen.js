import React from "react";
import { View, Button } from "react-native";
import ReporteC from "../components/Reporte";

function  ReporteScreen ({navigation}) {

    return (
    <View style={{padding: 12}}>
        <ReporteC></ReporteC>
        <View style={{padding:30}}>
            <Button 
                title="Crear Reporte"
                e-round={10}
                onPress={() => navigation.navigate('Crear Reporte')}
            />
        </View>
    </View>
    )
}

export default ReporteScreen