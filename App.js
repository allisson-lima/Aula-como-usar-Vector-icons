import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
export default function Icone() {
 return (
  <View style={style.container}>
      <Text style={style.Title}>Vector-Icons</Text>
      <View style={style.containerP}> 
      <TextInput
      style={style.input}
      placeholder="Preencha o campo"
      />
    <Icon style={style.icon} name="chrome" size={25} color='#000'/>
      
      </View>
  </View>
  );
}

const style = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  containerP:{
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
  Title:{
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: 'bold', 
    marginBottom: 50
  },
  input: {
    height: 50,
    width: '90%',
    backgroundColor: '#ccc',
    borderRadius: 5,
   
  },
  icon:{
    position: 'absolute',
    right: 45
  }
})