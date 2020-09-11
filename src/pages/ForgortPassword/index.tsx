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
import {ForgotPasswordForm} from './ForgotPassword.form';
import API from '../../../src/services/api';
import Storage from 'src/services/storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface ForgotPasswordProps {}
let forgotForm: any = {
  email: {value: '', error: ''},
};
export function ForgotPassword(props: ForgotPasswordProps | any) {
  const [forgot, setForgot] = React.useState(forgotForm);
  const [loading, setLoading] = React.useState(false);
  const handle = (value: any, name: string) => {
    setForgot((prevState: any) => {
      prevState[name].value = value;
      prevState[name].error = '';
      return {...prevState};
    });
  };

  function validate() {
    console.log(forgot);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (forgot.email.value == '') {
      setForgot((prevState: any) => {
        prevState['email'].error = 'Obrigatório';
        return {...prevState};
      });
      isValid = false;
      return;
    }
    if (!re.test(String(forgot.email.value).toLowerCase())) {
      setForgot((prevState: any) => {
        prevState['email'].error = 'Email inválido';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    isValid = true;

    return isValid;
  }

  function submit() {
    if (validate()) {
      let data = {email: forgot.email.value};
      setLoading(true);
      API.forgotPassword('sendforgotpasswordmail', data)
        .then((response) => {
          setLoading(false);
          props.navigation.navigate('SendEmailForgotPassword', {
            email: data.email,
          });
        })
        .catch((err) => {
          setLoading(false);
          Alert.alert(
            'Error',
            err.response.data.message,
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        });
    }

    //
  }
  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <Text onPress={() => props.navigation.pop()} style={{height: 30}}>
          <Image source={require('../../assets/imgs/arrow-l.png')} />
        </Text>
      </View>
      <View style={style.containerTitle}>
        <Text style={style.title}>Informe o seu e-mail de acesso</Text>
      </View>
      <View style={style.containerForm}>
        <ForgotPasswordForm handle={handle} data={forgot}></ForgotPasswordForm>
      </View>
      <View style={style.buttons}>
        <Button
          text={'Enviar'}
          onClick={() => submit()}
          loading={loading}></Button>
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
