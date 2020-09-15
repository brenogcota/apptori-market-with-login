import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Button} from '../../../components/Button';
import {InfoPersonalForm} from './InfoPersonal.form';
import Storage from '../../../../src/services/storage';
import {useNavigation} from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;

let PersonalForm: any = {
  email: {value: '', error: ''},
  name: {value: '', error: ''},
  phone: {value: '', error: ''},
};

export interface InfoPersonal {
  slideNext: Function;
}

export function InfoPersonal(props: InfoPersonal) {
  const [personal, setPersonal] = React.useState(PersonalForm);
  const [loading, setLoading] = React.useState(false);
  const handle = (value: any, name: string) => {
    setPersonal((prevState: any) => {
      prevState[name].value = name == 'phone' ? maskPhone(value) : value;
      prevState[name].error = '';
      console.log(prevState);
      return {...prevState};
    });
  };

  const navigation = useNavigation();

  function maskPhone(value: string) {
    let onlyNumber = value.replace(/\D/g, '');
    let x: any;
    if (onlyNumber.length <= 10) {
      x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
    } else {
      x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    }

    let newvalue = !x[2]
      ? x[1]
      : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    console.log(value);
    return newvalue;
  }

  function validate() {
    console.log(personal);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (personal.email.value == '') {
      setPersonal((prevState: any) => {
        prevState['email'].error = 'Obrigatório';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    if (!re.test(String(personal.email.value).toLowerCase())) {
      setPersonal((prevState: any) => {
        prevState['email'].error = 'Email inválido';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    if (personal.name.value == '') {
      setPersonal((prevState: any) => {
        prevState['name'].error = 'Obrigatório';
        return {...prevState};
      });
      isValid = false;
      return;
    }
    if (personal.name.value.length >= 100) {
      setPersonal((prevState: any) => {
        prevState['name'].error = 'Muito grande';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    if (personal.phone.value.lenght == '') {
      setPersonal((prevState: any) => {
        prevState['phone'].error = 'Obrigatório';
        return {...prevState};
      });
      isValid = false;
      return;
    }

    return isValid;
  }

  function submit() {
    if (validate()) {
      setLoading(true);
      let data = {
        email: personal.email.value,
        name: personal.name.value,
        phone: personal.phone.value.replace(/\D/g, ''),
      };

      setTimeout(async () => {
        setLoading(false);
        await Storage.setKey('personal', data);
        props.slideNext(1);
      }, 1000);
    }
  }
  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <Text onPress={() => navigation.goBack()} style={{height: 30}}>
          <Image source={require('../../../assets/imgs/arrow-l.png')} />
        </Text>
      </View>
      <View style={style.containerTitle}>
        <Text style={style.title}>Obrigado por nos escolher</Text>
      </View>
      <View style={style.containerForm}>
        <InfoPersonalForm handle={handle} data={personal}></InfoPersonalForm>
      </View>
      <View style={style.buttons}>
        <Button
          text={'Continuar'}
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
    height: windowHeight / 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  containerTitle: {
    marginVertical: 20,
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
  },
  buttons: {
    height: windowHeight / 4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonsText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#8B8B8B',
  },
});
