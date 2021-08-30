import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Message from '../../components/Message/index';
import chatRoomData from '../../../assets/data/Chats';
import styles from './styles';
import MessageInput from '../../components/MessageInput';
import {useRoute, useNavigation} from '@react-navigation/core';

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  //console.warn('Displaying chat room: ', route.params?.id);

  navigation.setOptions({title: 'Kilo'});

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
