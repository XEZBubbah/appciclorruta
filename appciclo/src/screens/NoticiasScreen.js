import React from "react";
import News from "../components/News";
import { View } from "react-native";

function NoticiasScreen ({navigation}) {
    return(
        <View style= {{padding: 20}}>
            <News/>
        </View>
    )
};



export default NoticiasScreen