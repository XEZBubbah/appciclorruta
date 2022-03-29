import * as React from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, TextArea, Radio, Stack} from 'native-base'


function CrearGrupoScreen ({navigation}) {

    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Nombre Grupo</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Visibilidad</FormControl.Label>
                    <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
                    <Stack direction={{
                    base: "column",
                    md: "row"
                    }} alignItems="center" space={2} w="75%" maxW="300px">
                        <Radio value="Publico" colorScheme="green" size="sm" my={1}>
                            Publico
                        </Radio>
                        <Radio value="Privado" colorScheme="green" size="sm" my={1}>
                            Privado
                        </Radio>
                    </Stack>
                    </Radio.Group>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Contraseña Grupo</FormControl.Label>
                    <Input type="password"/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Descripción</FormControl.Label>
                    <TextArea h={150} placeholder="Descrición del Grupo" width={275} />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('Grupos')}>
                    Crear grupo
                </Button>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )
}


export default  CrearGrupoScreen