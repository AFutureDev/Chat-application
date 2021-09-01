import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

const myID = 'u1';

const MessageInput = props => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    const newMsg = {
      message,
    };
    props.getMsgFromInput(newMsg);
    // props.create(newMsg);
    setMessage('');
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message..."
          value={message}
          onChangeText={setMessage}
        />
      </View>
      <Pressable onPress={sendMessage} style={styles.buttonContainer}>
        <Feather name="send" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default MessageInput;
