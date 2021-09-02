import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  TextInput,
  CheckBox,
  Button,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const navigation = useNavigation();

  const loginEvent = () => {
    if (!email) {
      console.warn('Please enter a name');
    } else if (!password) {
      console.warn('Please enter a email');
    } else {
      setEmail(email);
      setPassword(password);

      setEmail('');
      setPassword('');

      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../../assets/images/bg.png')}
          style={styles.img}>
          {/* <View style={styles.textContainer}>
          <Text style={styles.text}>Chat App</Text>
        </View> */}
        </ImageBackground>
        {/* Bottom View */}
        <View style={styles.bottomView}>
          <View style={{padding: 40}}>
            <Text style={{color: '#3777f0', fontSize: 34}}>Welcome</Text>
            {/* Form Inputs View */}
            <View style={{marginTop: 50}}>
              <TextInput
                style={{marginTop: 20}}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                underlineColorAndroid={'#AEAEAE'}
                keyboardType="email-address"
              />
              <TextInput
                style={{marginTop: 20}}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                underlineColorAndroid={'#AEAEAE'}
                secureTextEntry={true}
              />
            </View>
            {/* Button  */}
            <View style={styles.button}>
              <Pressable style={styles.loginBtn} onPress={loginEvent}>
                <Text style={styles.btnText}>Login</Text>
              </Pressable>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 70,
              }}>
              <Text>
                Don't have an account ?{' '}
                <Text style={{color: '#3777f0', fontStyle: 'italic'}}>
                  Register now
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    height: Dimensions.get('window').height / 2.5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#fff',
    bottom: 50,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  button: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#3777f0',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});

export default LoginScreen;
