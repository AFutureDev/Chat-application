import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Message from '../../components/Message/index';
import chatRoomData from '../../../assets/data/Chats';
import styles from './styles';

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({item}) => <Message message={item} />}
        inverted
      />
    </View>
  );
};

export default ChatRoomScreen;
