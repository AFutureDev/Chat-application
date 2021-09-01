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
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../../../assets/images/login.jpg')}
        style={styles.img}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Chat App</Text>
        </View>
      </ImageBackground>
      {/* Bottom View */}
      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
          <Text style={{color: '#4632A1', fontSize: 34}}>Welcome</Text>
          <Text>
            Don't have an account ?{' '}
            <Text style={{color: 'red', fontStyle: 'italic'}}>
              Register now
            </Text>
          </Text>
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
            <Pressable
              style={styles.loginBtn}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btnText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
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
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
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
