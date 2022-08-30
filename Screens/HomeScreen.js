import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const onSubmit = () => {
    navigation.navigate('Chat', {name: name});
  };
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={{marginTop: 64}}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{width: 100, height: 100, alignSelf: 'center'}}
        />
      </View>
      <View style={{marginHorizontal: 32}}>
        <Text style={styles.header}>UserName</Text>
        <TextInput
          placeholder="Design Into Code"
          style={styles.input}
          onChangeText={value => {
            setName(value);
          }}
          value={name}
        />
        <View style={{alignItems: 'flex-end', marginTop: 64}}>
          <TouchableOpacity style={styles.submit} onPress={onSubmit}>
            <Text style={{color: '#FFF'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5A',
    fontWeight: '600',
  },
  submit: {
    width: 70,
    height: 78,
    borderRadius: 70 / 2,
    backgroundColor: '#009387',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
