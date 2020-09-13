import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import {Button} from '../../components/Button';
import {LoginForm} from './Login.form';
import {StackScreenProps} from '@react-navigation/stack';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Api from '../../services/api';
import Storage from '../../services/storage';

import { AuthContext } from '../../context/authContext';

export interface LoginProps extends StackScreenProps<any, any> {}
let loginForm: any = {
  email: {value: '', error: ''},
  password: {value: '', error: ''},
};
export function Login(props: LoginProps) {
  const [login, setLogin] = React.useState(loginForm);
  const [loading, setLoading] = React.useState(false);

  const { signIn } = React.useContext(AuthContext);

  const handle = (value: any, name: string) => {
    setLogin((prevState: any) => {
      prevState[name].value = value;
      prevState[name].error = '';
      return {...prevState};
    });
  };

  function validate() {
    console.log(login);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (login.email.value == '') {
      setLogin((prevState: any) => {
        prevState['email'].error = 'Obrigatório';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    if (!re.test(String(login.email.value).toLowerCase())) {
      setLogin((prevState: any) => {
        prevState['email'].error = 'Email inválido';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    if (login.password.value == '') {
      setLogin((prevState: any) => {
        prevState['password'].error = 'Obrigatório';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    return isValid;
  }

  function submit() {
    if (validate()) {
      let data = {email: login.email.value, password: login.password.value};
      console.log(data);
      setLoading(true);
      Api.login(data, 'user/signin')
        .then((response) => {
          setLoading(false);
          Storage.setKey('token', response.data.token);
          signIn();
          Alert.alert(
            'Sucesso',
            'logado',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        })
        .catch((error) => {
          console.log(error.response);
          setLoading(false);
          Alert.alert(
            'Error',
            error.response.data.message,
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        });
    }
  }

  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <Text onPress={() => props.navigation.pop()} style={{height: 30}}>
          <Image source={require('../../assets/imgs/arrow-l.png')} />
        </Text>
      </View>
      <View style={style.containerTitle}>
        <Text style={style.title}>Bom te ver novamente</Text>
      </View>
      <View style={style.containerForm}>
        <LoginForm handle={handle} data={login}></LoginForm>
      </View>
      <View style={style.buttons}>
        <Button
          text={'Entrar'}
          onClick={() => submit()}
          loading={loading}></Button>
        <Text
          onPress={() => props.navigation.navigate('ForgotPassword')}
          style={style.buttonsText}>
          Esqueceu sua senha ?
        </Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: windowHeight / 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  containerForm: {
    height: windowHeight / 2,
    paddingHorizontal: 25,
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  buttons: {
    height: windowHeight / 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonsText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#8B8B8B',
  },
});
