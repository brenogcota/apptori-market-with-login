import * as React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Alert} from 'react-native';
import {Button} from '../../../components/Button';
import Storage from '../../../../src/services/storage';
import API from '../../../../src/services/api';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface SendEmailRegisterProps {}

export function SendEmailRegister(props: SendEmailRegisterProps) {
  const [personal, setPersonal] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);
  React.useEffect(() => {
    Storage.get('personal').then((personal) => {
      setPersonal(personal.email);
    });
  }, []);

  async function sendEmail() {
    const token = await Storage.get('token');

    console.log(token);
    setLoading(true);
    API.sendEmailRegister('user/resendmail', token)
      .then((response) => {
        setLoading(false);
        setDisableButton(true);
        Alert.alert(
          'Tudo certo!',
          'Email foi reenviado',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );

        setTimeout(() => {
          setDisableButton(false);
        }, 10000);
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
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={require('../../../assets/imgs/close-menu.png')} />
      </View>

      <View style={style.content}>
        <Text style={style.contenText}>
          Enviamos um email de confirmação para {personal}
        </Text>
        <View style={style.buttons}>
          <Button
            text={'Reenviar email'}
            loading={loading}
            onClick={() => sendEmail()}
            disabled={disableButton}></Button>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: windowHeight / 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  contenText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#8B8B8B',
    lineHeight: 40,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});
