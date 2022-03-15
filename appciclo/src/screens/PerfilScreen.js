import React from "react";
import { ScrollView, Center, Divider, Button, NativeBaseProvider} from 'native-base'

function  PerfilScreen ({navigation}) {

    return (
        <NativeBaseProvider>
        <Center>
            <ScrollView >
                <Button size={"lg"} > Perfil </Button>
                <Divider my={3} />
                <Button size={"lg"} > Itinerarios </Button>
                <Divider my={3} />
                <Button size={"lg"} > Grupos </Button>
                <Divider my={3} />
                <Button size={"lg"} > Reportes </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"} 
                    onPress={() => navigation.navigate('Map View')}    
                > Mapa Ciclorruta </Button>
                <Divider my={3} />
                <Button 
                    size={"lg"}
                    onPress={() => navigation.navigate('Noticias')} 
                > Noticias </Button>
            </ScrollView>
        </Center>
        </NativeBaseProvider>
    )
}

export default  PerfilScreen