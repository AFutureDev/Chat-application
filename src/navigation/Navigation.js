import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeHeader = props => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        padding: 10,
        alignItems: 'center',
      }}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png',
          }}
          style={{width: 35, height: 35, borderRadius: 30}}
        />
      </Pressable>

      <Text style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>
        Chat Application
      </Text>
      <Feather
        name="edit"
        size={24}
        color="#3777f0"
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
