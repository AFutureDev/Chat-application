import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ChatRoomItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png',
        }}
        style={styles.image}
      />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Raf</Text>
          <Text style={styles.text}>12:13AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          Hello, how are you ?
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;
