import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#52575D',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginTop: 50,
  },
  add: {
    backgroundColor: '#3777f0',
    position: 'absolute',
    bottom: 5,
    right: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#3777f0',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 20,
    marginTop: 80,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    flex: 1,
    margin: 10,
    marginTop: 80,
    justifyContent: 'center',
  },
});

export default styles;
