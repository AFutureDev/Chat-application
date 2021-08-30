import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const blue = '#3777f0';
const grey = 'lightgrey';

const myID = 'u1';

const index = ({message}) => {
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? grey : blue,
          marginLeft: isMe ? 'auto' : 10,
        },
      ]}>
      <Text style={{color: isMe ? '#000' : '#fff'}}>{message.content}</Text>
    </View>
  );
};

export default index;
