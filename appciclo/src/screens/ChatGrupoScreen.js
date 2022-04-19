import React, { useState, useCallback, useEffect } from 'react';
import { URL } from "../store/GoogleMaps";
import useAuth from "../hooks/useAuth";
import { GiftedChat } from 'react-native-gifted-chat';
import axios from "axios";


export default function ChatGrupo() {
    
    const [messages, setMessages] = useState([]);
    const { auth, group, idUser } = useAuth();
    const usuario = auth.userName;

    useEffect(async () => {
      axios.post(URL+':5000/chatM/fetchChatMessages', {Grupo: group})
      .then(response => {
        console.log(response.data.result)
        let users = new Array();
        let respon = response.data.result;
        for(var user in Object.keys(respon)){
          users.push({ 
            _id: respon[user]._id,
            text: respon[user].Mensaje,
            createdAt: respon[user].Fecha_Creacion,
            user: {
              _id: respon[user].UAppMov_Id,
              name: respon[user].UAppMov_Usuario,
            }
          });
        }
        setMessages(users)
      }).catch(error => {
        console.log(error)
      })
    }, [])

    async function send (text, createdAt) {
      axios.post(URL+':5000/chatM/storeUserMessages', {Usuario: auth.userName, text: text, Grupo: group, createdAt: createdAt })
      .then(response => {
        console.log(response.data.result)
      }).catch(error => {
        console.log(error);
      })
    }

    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const {
        createdAt = new Date(),
        text,
      } = messages[0]
      console.log("Fecha: "+createdAt)
      send(text, createdAt)
    }, [messages])

    return(
      <GiftedChat
        renderUsernameOnMessage= {true}
        messages={messages}
        showAvatarForEveryMessage= {true}
        showUserAvatar= {true}
        onSend={messages => onSend(messages)}
        user={{
          _id: idUser,
          name: usuario,
        }}
      />
    )
}