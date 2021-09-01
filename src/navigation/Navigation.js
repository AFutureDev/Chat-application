import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import {Image, Text, View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: HomeHeader,
            headerLeft: false,
          }}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{headerTitle: ChatRoomHeader}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeHeader = props => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        padding: 10,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png',
        }}
        style={{width: 35, height: 35, borderRadius: 30}}
      />
      <Text style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>
        Chat Application
      </Text>
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{marginHorizontal: 30}}
      />
    </View>
  );
};

const ChatRoomHeader = props => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Image
        source={{
          uri: 'https://resumator.s3.amazonaws.com/customer_20190618152639_F47TZW85FFKEI1NX/social_icons/20200714100635_600x600.jpg',
        }}
        style={{width: 35, height: 35, borderRadius: 30, marginRight: 5}}
      />
      <Text
        style={{
          fontWeight: 'bold',
        }}>
        {props.children}
      </Text>
    </View>
  );
};

export default Navigation;
