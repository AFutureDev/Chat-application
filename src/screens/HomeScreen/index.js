import React from 'react';
import {View, Text, Image} from 'react-native';
import ChatRoomItem from '../../components/ChatRoomItem';
import ChatRoomData from '../../../assets/data/ChatRooms';
import styles from './styles';

const chatRoom1 = ChatRoomData[0];
const chatRoom2 = ChatRoomData[1];

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <ChatRoomItem chatRoom={chatRoom1}/>
      <ChatRoomItem chatRoom={chatRoom2}/>
    </View>
  );
};

export default HomeScreen;
