import * as React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Alert} from 'react-native';
import {Button} from '../../../components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import API from '../../../../src/services/api';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface SendEmailForgotPasswordProps extends StackScreenProps<any> {}

export function SendEmailForgotPassword(props: SendEmailForgotPasswordProps) {
  const [loading, setLoading] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);

  async function sendEmail() {
    setLoading(true);
    const email = props.route.params.email;

    console.log(email);
    let data = {email: email};
    setLoading(true);
    API.forgotPassword('sendforgotpasswordmail', data)
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
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text onPress={() => props.navigation.pop()} style={{height: 30}}>
          <Image source={require('../../../assets/imgs/arrow-l.png')} />
        </Text>
      </View>

      <View style={style.content}>
        <Text style={style.contenText}>
          Enviamos um email com instruções para recuperar sua senha
        </Text>
        <View style={style.buttons}>
          <Button
            loading={loading}
            disabled={disableButton}
            text={'Reenviar email'}
            onClick={() => sendEmail()}></Button>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
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
