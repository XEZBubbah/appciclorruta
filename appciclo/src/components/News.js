import React, {Component} from "react";
import { View, Text, ActivityIndicator, ScrollView, Image, StyleSheet } from "react-native";
import { NativeBaseProvider, Box, AspectRatio, Center, Stack, Heading, HStack, Link } from "native-base";

const API_KEY = '0b51069c92a6439ca92cec0af62ad543';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 5
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
                                        <Box maxW={"xl"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                                        {news.source.name}
                                    </Center>
                                    </Box>
                                    <Stack p="4" space={3}>
                                    <Stack space={2}>
                                        <Link href={news.url}>
                                            <Heading size="md" ml="-1" >
                                                {news.title}
                                            </Heading>
                                        </Link>
                                    </Stack>
                                    <Text fontWeight="400">
                                        {news.description}
                                    </Text>
                                    <HStack alignItems="center" space={4} justifyContent="space-between">
                                        <HStack alignItems="center">
                                        <Text color="coolGray.600" _dark={{
                                        color: "warmGray.200"
                                        }} fontWeight="400">
                                            {news.publishedAt.substring(0,10)}
                                        </Text>
                                        </HStack>
                                    </HStack>
                                    </Stack>
                                </Box>
                                </Box>
                                </NativeBaseProvider>
                                <Text style={{fontSize: 10}}> </Text>
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