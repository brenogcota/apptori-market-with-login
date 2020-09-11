import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from '../../../components/Input';

interface IAddressForm {
  handle: Function;
  data: any;
}

export function AddressForm(props: IAddressForm) {
  return (
    <View style={style.containe}>
      <Input
        label={'CEP'}
        name="zip_code"
        changeText={(value: any, name: string) => props.handle(value, name)}
        textContentType="postalCode"
        keyboardType={'number-pad'}
        value={props.data.zip_code.value}
        error={props.data.zip_code.error}
      />
      <View style={{margin: 5}}></View>
      <Input
        label={'Rua'}
        name="street"
        changeText={(value: any, name: string) => props.handle(value, name)}
        value={props.data.street.value}
        error={props.data.street.error}
      />
      <View style={{margin: 5}}></View>
      <Input
        label={'Bairro'}
        name="district"
        changeText={(value: any, name: string) => props.handle(value, name)}
        value={props.data.district.value}
        error={props.data.district.error}
      />
      <View style={{margin: 5}}></View>
      <View style={style.row}>
        <View style={style.col}>
          <Input
            label={'Número'}
            name="number"
            changeText={(value: any, name: string) => props.handle(value, name)}
            keyboardType={'number-pad'}
            value={props.data.number.value}
            error={props.data.number.error}
          />
        </View>
        <View style={style.col}>
          <Input
            label={'Complemento'}
            name="complement"
            changeText={(value: any, name: string) => props.handle(value, name)}
            value={props.data.complement.value}
            error={props.data.complement.error}
          />
        </View>
      </View>
      <View style={{margin: 5}}></View>
      <View style={style.row}>
        <View style={style.col}>
          <Input
            label={'Estado'}
            name="state"
            changeText={(value: any, name: string) => props.handle(value, name)}
            textContentType="addressState"
            value={props.data.state.value}
            error={props.data.state.error}
          />
        </View>
        <View style={style.col}>
          <Input
            label={'Cidade'}
            name="city"
            changeText={(value: any, name: string) => props.handle(value, name)}
            textContentType="addressCity"
            value={props.data.city.value}
            error={props.data.city.error}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containe: {
    padding: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
});
