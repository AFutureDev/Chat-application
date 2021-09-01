import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.titleBar}>
          <Ionicons name="arrow-back" size={24} color="#52575D" />
          <Feather name="more-vertical" size={24} color="#52575D" />
        </View> */}

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
              size={45}
              color="#DFD8C8"
              style={{marginTop: 6, marginLeft: 2}}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, {fontWeight: '200', fontSize: 36}]}>
            Raf
          </Text>
          <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
            Email
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
