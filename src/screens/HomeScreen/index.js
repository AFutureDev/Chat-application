import React from 'react';
import {View, Text, Image} from 'react-native';
import ChatRoomItem from '../../components/ChatRoomItem';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <ChatRoomItem />
    </View>
  );
};

export default HomeScreen;
