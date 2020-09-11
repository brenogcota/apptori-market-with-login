import * as React from 'react';
import {View} from 'react-native';
import {Input} from '../../../components/Input';

interface IInfoPersonalForm {
  handle: Function;
  data: any;
}

export function InfoPersonalForm(props: IInfoPersonalForm) {
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
        label={'Nome Completo'}
        name="name"
        changeText={(value: any, name: string) => props.handle(value, name)}
        error={props.data.name.error}
      />
      <View style={{margin: 10}}></View>
      <Input
        label={'Telefone'}
        name="phone"
        value={props.data.phone.value}
        changeText={(value: any, name: string) => props.handle(value, name)}
        keyboardType={'phone-pad'}
        error={props.data.phone.error}
      />
    </View>
  );
}
