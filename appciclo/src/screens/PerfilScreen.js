import React from "react";
import { Box, Text, Center,Image, Divider, Link, NativeBaseProvider, Heading, Pressable, HStack, Badge, Spacer, Flex} from 'native-base'

function  PerfilScreen ({navigation}) {

    return (
        <NativeBaseProvider>
        <Center style={{padding: 30}}>
        <Spacer/>
        <Image size={100} resizeMode={"contain"} borderRadius={250} source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} alt="Alternate Text" />
        <Heading size={"lg"}>Javier Parra</Heading>
        <Text>correo12@hotmail.com</Text>
        <Link _text={{
            fontSize: "sm",
            fontWeight: "500",
            color: "indigo.500"
            }}
                onPress={() => navigation.navigate('Cambiar Contraseña')}>
                Cambiar Contraseña
        </Link>
        <Divider my={4}></Divider>

        <Box alignItems="center">
        <Pressable onPress={() => console.log("I'm Pressed")}>
        <Box width="80" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
          <HStack alignItems="center">
            <Badge colorScheme="378B2E" _text={{
            color: "white"
          }} variant="solid" rounded="4">
              Grupos
            </Badge>
            <Spacer />
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Nombre Grupo
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Este grupo es creado con el fin de agrupar a aquellas personas que deseen hacer un recorrido grupal en 
            las ciclorrutas de Bucaramanga.
          </Text>
        </Box>
        </Pressable>
        </Box>
        <Divider my={4}></Divider>

        <Box alignItems="center">
        <Pressable onPress={() => console.log("I'm Pressed")}>
        <Box width="80" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
          <HStack alignItems="center">
            <Badge colorScheme="darkBlue" _text={{
            color: "white"
          }} variant="solid" rounded="4">
              Itinerarios
            </Badge>
            <Spacer />
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Nombre Itinerario
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Este Itinerario es creado con el fin de agrupar a aquellas personas que deseen hacer un recorrido grupal en 
            las ciclorrutas de Bucaramanga.
          </Text>
        </Box>
        </Pressable>
        </Box>
        </Center>
        
        </NativeBaseProvider>
    )
}

export default  PerfilScreen