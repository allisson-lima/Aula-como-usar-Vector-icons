import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default function Icone() {
 return (
   
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <View style={style.container}>

        <Text style={style.Title}>Acessibilidade</Text>

      <View style={style.containerP}> 
          <TextInput
          style={style.input}
          placeholder="Digite seu Usuário"
          />
        <Icon style={style.icon} name="user" size={25} color='#000'/>
      
      </View>
      
      <View style={style.containerP}> 
        <TextInput
        style={style.input}
        placeholder="Digite seu Email"
        />
      <Icon style={style.icon} name="mail" size={25} color='#000'/>
        
      </View>

      <View style={style.containerP}> 
        <TextInput
        style={style.input}
        placeholder="Digite sua Senha"
        />
      <Icon style={style.icon} name="key" size={25} color='#000'/>
        
      </View>

      <TouchableOpacity style={style.containerButton}>
        <Text style={style.textButton}>Entrar</Text>
      </TouchableOpacity>

  </View>
  </TouchableWithoutFeedback>
  
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
    marginBottom: 15
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
    padding: 5
  },
  icon:{
    position: 'absolute',
    right: 45
  },
  containerButton:{
    width: '90%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#399fff',
    borderRadius: 5,
    marginTop: 20
  },
  textButton:{
    color: '#fff',
    fontSize: 25
  }
})