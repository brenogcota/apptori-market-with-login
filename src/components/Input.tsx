import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export interface InputProps {
  label: string;
  name?: string;
  changeText: Function;
  textContentType?: any;
  keyboardType?: any;
  textPassord?: boolean;
  value?: string;
  error: string | null;
}

export function Input(props: InputProps) {
  return (
    <View style={style.container}>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        style={style.input}
        textContentType={props.textContentType}
        keyboardType={props.keyboardType}
        onChangeText={(value) => props.changeText(value, props.name)}
        secureTextEntry={props.textPassord}
        value={props.value}></TextInput>
      {props.error != '' && <Text style={style.error}>{props.error}</Text>}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#D2D2D2',
    paddingVertical: 5,
    fontSize: 16,
  },
  error: {
    padding: 5,
    color: 'red',
  },
});
