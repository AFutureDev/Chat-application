import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Message from '../../components/Message/index';
import chatRoomData from '../../../assets/data/Chats';
import styles from './styles';
import MessageInput from '../../components/MessageInput';
import {useRoute} from '@react-navigation/core';

const ChatRoomScreen = () => {
  const route = useRoute();

  console.warn('Displaying chat room: ', route.params?.id);

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({item}) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatRoomScreen;
