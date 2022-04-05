import React, { useState, useCallback, useEffect } from 'react'
import useAuth from "../hooks/useAuth";
import { GiftedChat } from 'react-native-gifted-chat'


export default function ChatGrupo() {
    
    const [messages, setMessages] = useState([]);
    const { auth } = useAuth();

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])

    return(
        <GiftedChat
        messages={messages}
        showAvatarForEveryMessage= {true}
        onSend={messages => onSend(messages)}
        user={{
          _id: auth.userName,
          name: auth.userName,
          avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
        }}
      />
    )
}