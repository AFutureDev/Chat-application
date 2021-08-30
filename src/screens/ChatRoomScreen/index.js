import React from 'react';
import {View, Text} from 'react-native';
import Message from '../../components/Message/index';
import chatRoomData from '../../../assets/data/Chats';
import styles from './styles';

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <Message message={chatRoomData.messages[0]} />
    </View>
  );
};

export default ChatRoomScreen;
