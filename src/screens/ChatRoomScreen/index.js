import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Message from '../../components/Message/index';
import chatRoomData from '../../../assets/data/Chats';
import styles from './styles';
import MessageInput from '../../components/MessageInput';
import {useRoute, useNavigation} from '@react-navigation/core';

import {API, graphqlOperation} from 'aws-amplify';
import {listMessages} from '../../../src/graphql/queries';

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  //console.warn('Displaying chat room: ', route.params?.id);

  //navigation.setOptions({title: 'Kilo'});

  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchListOfMessages();
  }, []);

  const fetchListOfMessages = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listMessages));
      setMessages(data.data.listMessages.items);
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessageToServer = msg => {
    const msgObj = {
      content: msg.message,
      createdAt: '2020-10-10 12:48:00',
      id: 'm10',
      updatedAt: '2021-08-31 13:52:54',
      user: {
        chatId: '1',
        createdAt: '2021-08-31 13:50:28',
        id: 'u2',
        imageUri:
          'https://resumator.s3.amazonaws.com/customer_20190618152639_F47TZW85FFKEI1NX/social_icons/20200714100635_600x600.jpg',
        name: 'Kilo',
        updatedAt: '2021-08-31 13:50:28',
      },
      userId: 'u2',
      userName: 'Kilo',
    };
    setMessages([msgObj, ...messages]);
  };

  if (!messages) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <Message message={item} key={index} />}
        inverted
      />
      <MessageInput getMsgFromInput={sendMessageToServer} />
    </SafeAreaView>
  );
};

export default ChatRoomScreen;
