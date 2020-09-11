import * as React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../../components/Input';

interface IPasswordForm {
  handle: Function;
  data: any;
}

export function PasswordForm(props: IPasswordForm) {
  return (
    <View>
      <Input
        label={'Senha'}
        name="password"
        changeText={(value: any, name: string) => props.handle(value, name)}
        textContentType="password"
        textPassord={true}
        error={props.data.password.error}
      />
      <View style={{margin: 15}}></View>
      <Input
        label={'Confirmação senha'}
        name="password_confirmation"
        changeText={(value: any, name: string) => props.handle(value, name)}
        textContentType="password"
        textPassord={true}
        error={props.data.password_confirmation.error}
      />
    </View>
  );
}
