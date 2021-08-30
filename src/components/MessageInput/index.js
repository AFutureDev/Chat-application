import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.warn('sending', message);

    setMessage('');
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="#595959"
          style={styles.icon}
        />
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
