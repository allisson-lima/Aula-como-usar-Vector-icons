import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconSenha from 'react-native-vector-icons/Ionicons';
export default function Icone() {

const [senha, setSenha] = useState('');
const [passhide, setPasshide] = useState(true);  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.container}>
        <Text style={style.Title}>Input de Senha</Text>

        <View style={style.containerP}>
          <TextInput
            style={style.input}
            placeholder="Digite seu Usuário"
            placeholderTextColor="#fff"
          />

          <Icon style={style.icon} name="user" size={25} color="#fff" />
        </View>

        <View style={style.containerP}>
          <TextInput
            style={style.input}
            placeholder="Digite seu Email"
            placeholderTextColor="#fff"
          />
          <Icon style={style.icon} name="mail" size={25} color="#fff" />
        </View>

        <View style={style.containerP}>
          <TextInput
            style={style.input}
            placeholder="Digite sua Senha"
            placeholderTextColor="#fff"
            value={senha}
            onChangeText={(texto) => setSenha(texto)}
            secureTextEntry={passhide}
          />

          <TouchableOpacity style={style.icon} onPress={() => setPasshide(!passhide)}>
            <IconSenha name={passhide ? 'ios-eye' : 'ios-eye-off'} color="#fff" size={30} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.containerButton}>
          <Text style={style.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ccc',
  },
  containerP: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  Title: {
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    height: 50,
    width: '90%',
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 5,
    color: '#fff'
  },
  icon: {
    position: 'absolute',
    right: 45,
  },
  containerButton: {
    width: '90%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#399fff',
    borderRadius: 5,
    marginTop: 20,
  },
  textButton: {
    color: '#fff',
    fontSize: 25,
    
  },
 
});
