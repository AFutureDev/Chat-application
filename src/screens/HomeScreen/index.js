import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import ChatRoomItem from '../../components/ChatRoomItem';
import ChatRoomData from '../../../assets/data/ChatRooms';
import styles from './styles';

const chatRoom1 = ChatRoomData[0];
const chatRoom2 = ChatRoomData[1];

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomData}
        renderItem={({item}) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
