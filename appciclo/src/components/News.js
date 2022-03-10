import React, {Component} from "react";
import { View, Text, ActivityIndicator, ScrollView, Image, StyleSheet } from "react-native";

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
                                    <Image source={{ uri: `${news.urlToImage}`}} 
                                    style= {{height: 100, width: 100, borderRadius: 10}} />
                                    <Text style={{alignSelf:"auto"}} > {news.title} </Text>
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