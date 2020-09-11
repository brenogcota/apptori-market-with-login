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
import {Button} from '../../../components/Button';
import {PasswordForm} from './Password.form';
import {StackScreenProps} from '@react-navigation/stack';
import Storage from '../../../../src/services/storage';
import API from '../../../../src/services/api';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let passwordForm: any = {
  password: {value: '', error: ''},
  password_confirmation: {value: '', error: ''},
};

export function Password() {
  const [passwordItem, setPassword] = React.useState(passwordForm);
  const [loading, setLoading] = React.useState(false);
  const handle = (value: any, name: string) => {
    setPassword((prevState: any) => {
      prevState[name].value = value;
      prevState[name].error = '';
      return {...prevState};
    });
  };

  const navigation = useNavigation();

  function validate() {
    console.log(passwordItem);

    let isValid = true;

    if (passwordItem.password.value == '') {
      setPassword((prevState: any) => {
        prevState['password'].error = 'Obrigatório';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    if (passwordItem.password_confirmation.value == '') {
      setPassword((prevState: any) => {
        prevState['password_confirmation'].error = 'Obrigatório';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    if (
      passwordItem.password_confirmation.value != passwordItem.password.value
    ) {
      setPassword((prevState: any) => {
        prevState['password_confirmation'].error = 'Não conrresponde a senha';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    return isValid;
  }

  async function submit() {
    if (validate()) {
      setLoading(true);
      let personal = await Storage.get('personal');
      const address = await Storage.get('address');
      personal['password'] = passwordItem.password.value;
      personal['password_confirmation'] =
        passwordItem.password_confirmation.value;

      const data = {
        user: personal,
        addresses: address,
      };

      API.register(data, 'user/signup')
        .then(async (response) => {
          console.log(response, 'response passeword');
          setLoading(false);
          const token = response.data['token'];
          const res = await Storage.setKey('token', token);
          if (res) {
            navigation.navigate('SendEmailRegister');
          }
        })
        .catch((error) => {
          setLoading(false);
          Alert.alert(
            'Error',
            error.response.data.message || 'Não indentificado',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        });
    }
    //
  }
  return (
    <View style={style.container}>
      <View style={style.header}></View>

      <View style={style.containerForm}>
        <PasswordForm handle={handle} data={passwordItem}></PasswordForm>
      </View>
      <View style={style.buttons}>
        <Button
          text={'Concluir'}
          onClick={() => submit()}
          loading={loading}></Button>
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
    height: windowHeight / 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containeCircle: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-between',
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: '#8B8B8B',
  },

  containerForm: {
    height: windowHeight / 1.6,
    paddingHorizontal: 25,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  buttons: {
    height: windowHeight / 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
