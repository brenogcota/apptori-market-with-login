import * as React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {Button} from '../../components/Button';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export interface WelcomeProps extends StackScreenProps<any, any> {}

export function Welcome(props: WelcomeProps) {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Image
          style={{height: 270, width: '100%'}}
          resizeMode={'contain'}
          source={require('../../assets/imgs/welcome-img.png')}
        />
      </View>
      <View style={style.buttons}>
        <Button
          text={'Vamos lá'}
          onClick={() => props.navigation.navigate('Login')}></Button>
        <Text
          onPress={() => props.navigation.navigate('Register')}
          style={style.buttonsText}>
          Não tem conta ? Cadastre-se
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 30,
  },
  content_text: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: '#8B8B8B',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonsText: {
    fontSize: 15,
    fontWeight: '500',
  },
});
