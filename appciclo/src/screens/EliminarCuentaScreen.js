import React, { useState } from "react";
import { Text, Center, NativeBaseProvider, Button, HStack} from 'native-base';
import useAuth from "../hooks/useAuth";

export default function EliminarCuenta ({navigation}){

    const {logout} = useAuth('');

    const [validar, setValidar] = useState(false);
    console.log(validar)

    const eliminado = () => {
        navigation.navigate('Login')
    }

    return(
        <NativeBaseProvider>
            <Center>
                <Text p={10}>¿Seguro que desea eliminar su cuenta?</Text>
                <HStack>
                    <Button marginRight={5}  onPress={() => {
                        setValidar(true)
                    }}>Aceptar</Button>
                    <Button onPress={() => {
                        navigation.navigate('Perfil')
                    }}>Cancelar</Button>
                </HStack>
            </Center>
            {
                validar === true ? (
                    console.log('Proceso de eliminar'),
                    logout(),
                    eliminado()
                ): (
                    console.log('Operación cancelada')
                )
            }
        </NativeBaseProvider>
    )
}