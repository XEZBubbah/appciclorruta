import React, { useState, useCallback, useLayoutEffect } from 'react';
import { URL } from "../store/GoogleMaps";
import useAuth from "../hooks/useAuth";
import { GiftedChat } from 'react-native-gifted-chat';
import axios from "axios";


export default function ChatGrupo() {
    
    const [messages, setMessages] = useState([]);
    const { auth, group } = useAuth();

    useLayoutEffect(async () => {
      axios.post(URL+':5000/chatM/fetchChatMessages', {Grupo: group})
      .then(response => {
        console.log(response.data.result)
        setMessages(response.data.result)
        return response.data.result
      }).catch(error => {
        return console.log(error)
      })
    })

    async function send (text) {
      axios.post(URL+':5000/chatM/storeUserMessages', {Usuario: auth.userName, text: text, Grupo: group })
      .then(response => {
        console.log(response.data.result)
      }).catch(error => {
        console.log(error);
      })
    }

    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const {
        text,
      } = messages[0]
      send(text)
    }, [])

    return(
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage= {true}
        onSend={messages => onSend(messages)}
        user={{
          avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
        }}
      />
    )
}