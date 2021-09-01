import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [changeName, setChangeName] = useState('Raf');
  const [changeEmail, setChangeEmail] = useState('Email@gmail.com');

  const save = () => {
    //console.warn('pr');
    if (!name) {
      console.warn('Please enter a name');
    } else if (!email) {
      console.warn('Please enter a email');
    } else {
      setChangeName(name);
      setChangeEmail(email);

      setName('');
      setEmail('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png',
              }}
              style={styles.image}
              resizeMode="center"></Image>
          </View>
          <View style={styles.add}>
            <Ionicons
              name="add"
              size={22}
              color="#DFD8C8"
              style={{marginTop: 2, marginLeft: 2}}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, {fontWeight: '200', fontSize: 36}]}>
            {changeName}
          </Text>
          <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
            {changeEmail}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={{margin: 10}}>
            <Text style={{color: '#AEB5BC'}}>FullName</Text>
            <TextInput
              style={{color: 'black'}}
              value={name}
              onChangeText={setName}
              underlineColorAndroid="#AEB5BC"
            />
          </View>
          <View style={{margin: 10}}>
            <Text style={{color: '#AEB5BC'}}>Email</Text>
            <TextInput
              style={{color: 'black'}}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              underlineColorAndroid="#AEB5BC"
            />
          </View>
        </View>
        <Pressable style={styles.btn} onPress={save}>
          <Text style={styles.btnText}>Save</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
