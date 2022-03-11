import React, {Component} from "react";
import { View, Text, ActivityIndicator, ScrollView, Image, StyleSheet } from "react-native";
import { NativeBaseProvider, Box, AspectRatio, Center, Stack, Heading, HStack } from "native-base";

const API_KEY = '0b51069c92a6439ca92cec0af62ad543';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
});

class News extends Component {
    state = {
        news: []
    }
    componentDidMount() {
        fetch(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
        )
        .then(res => res.json())
        .then(response => {
            this.setState({
                news: response.articles
            })
            console.log(this.state.news.length) 
            console.log(response)
        })
        .catch(error =>{
            console.log(error);
        });
    }
    render(){
        return (
            <View>  
                {
                    this.state.news.length === 0 ? <ActivityIndicator color="black" size="large" style={[styles.container, styles.horizontal]} />: 
                    (<ScrollView 
                        horizontal= {false}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            this.state.news.map((news, index) => (
                                <View key={index}>
                                <NativeBaseProvider>
                                    <Box alignItems="center">
                                        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                            borderColor: "coolGray.600",
                                            backgroundColor: "gray.700"
                                        }} _web={{
                                                shadow: 2,
                                                borderWidth: 0
                                        }} _light={{
                                            backgroundColor: "gray.50"
                                        }}>
                                    <Box>
                                    <AspectRatio w="100%" ratio={16 / 9}>
                                        <Image source={{
                                        uri: `${news.urlToImage}`
                                    }} alt="image" />
                                    </AspectRatio>
                                    <Center bg="violet.500" _dark={{
                                    bg: "violet.400"
                                    }} _text={{
                                    color: "warmGray.50",
                                    fontWeight: "700",
                                    fontSize: "xs"
                                    }} position="absolute" bottom="0" px="3" py="1.5">
                                        {news.url}
                                    </Center>
                                    </Box>
                                    <Stack p="4" space={3}>
                                    <Stack space={2}>
                                        <Heading size="md" ml="-1" >
                                            {news.title}
                                        </Heading>
                                        <Text fontSize="xs" _light={{
                                        color: "violet.500"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        The Silicon Valley of India.
                                        </Text>
                                    </Stack>
                                    <Text fontWeight="400">
                                        {news.description}
                                    </Text>
                                    <HStack alignItems="center" space={4} justifyContent="space-between">
                                        <HStack alignItems="center">
                                        <Text color="coolGray.600" _dark={{
                                        color: "warmGray.200"
                                        }} fontWeight="400">
                                            {news.publishedAt}
                                        </Text>
                                        </HStack>
                                    </HStack>
                                    </Stack>
                                </Box>
                                </Box>
                                </NativeBaseProvider>
                                </View>
                            ))
                        }
                    </ScrollView>)
                }

            </View>
        );
    }
}


export default News