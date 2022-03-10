import React from "react";
import News from "../components/News";
import { View, StyleSheet} from "react-native";

function NoticiasScreen ({navigation}) {
    return(
        <View style= {{padding: 30}}>
            <News/>
        </View>
    )
};



export default NoticiasScreen