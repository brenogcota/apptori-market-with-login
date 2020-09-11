import * as React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';

interface IForgotPasswordForm {
  handle: Function;
  data: any;
}

export function ForgotPasswordForm(props: IForgotPasswordForm) {
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
    </View>
  );
}
