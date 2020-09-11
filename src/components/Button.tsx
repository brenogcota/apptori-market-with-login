import * as React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export interface ButtonProps {
  text: string;
  onClick: Function;
  width?: string;
  loading?: boolean;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  return !props.loading ? (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={() => props.onClick()}
      style={[
        {width: props.width},
        style.button,
        props.disabled ? style.buttonDisable : null,
      ]}>
      <Text style={style.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[{width: props.width}, style.button]}
      activeOpacity={1}>
      <ActivityIndicator size={35} color={'#ffffff'} />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#FF0000',
    height: 60,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonDisable: {
    backgroundColor: '#BF5C5C',
  },
  buttonText: {color: '#ffffff', fontWeight: '500'},
});
