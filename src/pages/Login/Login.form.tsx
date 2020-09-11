import * as React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';

interface ILoginForm {
  handle: Function;
  data: any;
}

export function LoginForm(props: ILoginForm) {
  return (
    <View>
      <Input
        label={'Email'}
        name="email"
        changeText={(value: any, name: string) => props.handle(value, name)}
        textContentType="emailAddress"
        keyboardType={'email-address'}
        error={props.data.email.error}
      />
      <View style={{margin: 10}}></View>
      <Input
        label={'Senha'}
        name="password"
        changeText={(value: any, name: string) => props.handle(value, name)}
        textContentType="password"
        textPassord={true}
        error={props.data.password.error}
      />
    </View>
  );
}
