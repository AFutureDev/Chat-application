import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
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

  useEffect(() => {
    const fetchListOfMessages = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listMessages));
        //console.warn(data);
        console.warn(data.data.listMessages.items);
        setMessages(data.data.listMessages.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchListOfMessages();
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={messages}
        renderItem={({item}) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatRoomScreen;
