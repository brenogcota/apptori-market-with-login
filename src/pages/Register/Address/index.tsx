import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../../../components/Button';
import {AddressForm} from './Address.form';
import ZipCode from '../../../services/zipcode';
import uid from 'uid';
import Storage from '../../../../src/services/storage';
import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface AddressListProps {
  item?: any;
  edit: Function;
  remove: Function;
}
export interface AddressProps {
  slideNext: Function;
}

let addressForm: any = {
  zip_code: {value: '', error: ''},
  street: {value: '', error: ''},
  district: {value: '', error: ''},
  state: {value: '', error: ''},
  city: {value: '', error: ''},
  complement: {value: '', error: ''},
  number: {value: '', error: ''},
};

const AddressList = (props: AddressListProps) => {
  console.log(props.item);
  return (
    <View style={style.itemList}>
      <Text style={style.itemListText}>{props.item.zip_code.value}</Text>
      <View style={style.itemListActions}>
        <TouchableOpacity onPress={() => props.edit(props.item.zip_code.value)}>
          <Image
            source={require('../../../assets/imgs/edit.png')}
            style={{height: 20, width: 20}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.remove(props.item.zip_code.value)}>
          <Image
            source={require('../../../assets/imgs/close.png')}
            style={{height: 15, width: 15}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export function Address(props: AddressProps) {
  const [address, setAddressForm] = React.useState(addressForm);
  const [loading, setLoading] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [listAddress, setListAddress] = React.useState([]);
  const navigation = useNavigation();

  const handle = (value: any, name: string) => {
    setAddressForm((prevState: any) => {
      prevState[name].value = value;
      prevState[name].error = '';
      return Object.assign({}, prevState);
    });

    // getAddressZipCode();
  };

  function getAddressZipCode() {
    if (address.zip_code.value.length == 8) {
      console.log(address.zip_code, 'ajjajajjaj');
      ZipCode.getAddres(address.zip_code.value).then((address) =>
        setValuesApiInForm(address),
      );
    }
  }

  function setValuesApiInForm(address: any) {
    setAddressForm((prevState: any) => {
      prevState['street'].value = address.street;
      prevState['district'].value = address.neighborhood;
      prevState['city'].value = address.city;
      prevState['state'].value = address.state;
      return Object.assign({}, prevState);
    });
  }

  function validate() {
    console.log(address);

    let isValid = true;

    if (address.zip_code.value == '') {
      setAddressForm((prevState: any) => {
        prevState['zip_code'].error = 'Obrigatório';
        return Object.assign({}, prevState);
      });
      isValid = false;
      return;
    }

    if (address.street.value == '') {
      setAddressForm((prevState: any) => {
        prevState['street'].error = 'Obrigatório';
        return Object.assign({}, prevState);
      });
      isValid = false;
      return;
    }

    if (address.district.value == '') {
      setAddressForm((prevState: any) => {
        prevState['district'].error = 'Obrigatório';
        return Object.assign({}, prevState);
      });
      isValid = false;
      return;
    }

    if (address.state.value == '') {
      setAddressForm((prevState: any) => {
        prevState['state'].error = 'Obrigatório';
        return Object.assign({}, prevState);
      });
      isValid = false;
      return;
    }

    if (address.city.value == '') {
      setAddressForm((prevState: any) => {
        prevState['city'].error = 'Obrigatório';
        return Object.assign({}, prevState);
      });
      isValid = false;
      return;
    }

    if (address.number.value == '') {
      setAddressForm((prevState: any) => {
        prevState['number'].error = 'Obrigatório';
        return Object.assign({}, prevState);
      });
      isValid = false;
      return;
    }

    return isValid;
  }

  function editAddress(id: string) {
    console.log(id);
    let address: any = listAddress.filter(
      (item: any) => item.zip_code.value == id,
    )[0];
    setAddressForm(() => ({...address}));
    setEdit(true);
  }
  function removeAddress(id: string) {
    console.log(id);
    let address = listAddress.filter((item: any) => item.zip_code.value != id);
    console.log(address, 'list address depois do remove');
    setListAddress(Object.assign([], address));
  }
  function addOther() {
    setAdd(true);
    resetForm();
  }

  function submit() {
    if (validate()) {
      // navigation.navigate('Password')
      setLoading(true);
      if (edit) {
        saveEdit();
        return;
      }
      setTimeout(() => {
        setLoading(false);
        setListAddress((prevState: any) => {
          console.log(prevState, '1');
          prevState.push({...address, uid: uid()});
          console.log(prevState, '2');
          return Object.assign([], prevState);
        });

        console.log(listAddress);
        resetForm();
        setAdd(false);
      }, 2000);
    }
  }

  function saveEdit() {
    console.log(address, 'address edit');

    let indexelement = listAddress.findIndex(
      (item: any) => item.uid == address.uid,
    );

    console.log(indexelement);

    let copyListAddress: any = [...listAddress];
    copyListAddress[indexelement] = address;

    setListAddress((prevState: any) => {
      prevState[indexelement] = address;
      return Object.assign([], prevState);
    });

    setEdit(false);
    setLoading(false);
    resetForm();
  }

  async function saveAddress() {
    setLoading(true);

    const finalAddress = listAddress.map((item: any) => {
      let obj = {
        zip_code: item.zip_code.value,
        street: item.street.value,
        district: item.district.value,
        state: item.state.value,
        city: item.city.value,
        complement: item.complement.value,
        number: item.number.value,
      };
      return obj;
    });

    let response = await Storage.setKey('address', finalAddress);
    if (response) {
      setTimeout(() => {
        setLoading(false);
        props.slideNext(2);
      }, 1000);
    }
  }

  function resetForm() {
    let obj = {
      zip_code: {value: '', error: ''},
      street: {value: '', error: ''},
      district: {value: '', error: ''},
      state: {value: '', error: ''},
      city: {value: '', error: ''},
      complement: {value: '', error: ''},
      number: {value: '', error: ''},
    };

    setAddressForm({...obj});
  }
  console.log('update ');
  console.log(listAddress);
  console.log(address, 'address');
  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <TouchableOpacity style={style.buttonHeader} onPress={() => addOther()}>
          <Text style={style.textButtonHeader}>Adicionar outro</Text>
        </TouchableOpacity>
      </View>

      {listAddress.length > 0 && !edit && !add ? (
        <View style={style.containerFormList}>
          {listAddress.map((item, index) => (
            <AddressList
              edit={(id: string) => editAddress(id)}
              remove={(id: string) => removeAddress(id)}
              item={item}
              key={index}
            />
          ))}
        </View>
      ) : (
        <View style={style.containerForm}>
          <Text> VERSAO (v1.0.5)</Text>
          <AddressForm data={address} handle={handle}></AddressForm>
        </View>
      )}

      <View style={style.buttons}>
        <Button
          text={listAddress.length > 0 && !edit && !add ? 'Quase lá' : 'Salvar'}
          onClick={() =>
            listAddress.length > 0 && !edit && !add ? saveAddress() : submit()
          }
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
  buttonHeader: {
    padding: 10,
    backgroundColor: '#FAFAFA',
    marginLeft: 5,
    borderRadius: 5,
  },
  textButtonHeader: {
    fontSize: 16,
    color: '#C3C3C3',
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
    justifyContent: 'space-evenly',
  },
  containerFormList: {
    height: windowHeight / 1.6,
    paddingHorizontal: 25,
  },
  buttons: {
    height: windowHeight / 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonsText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#8B8B8B',
  },

  itemList: {
    height: windowHeight / 7,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  itemListText: {
    color: '#8B8B8B',
    fontSize: 18,
    fontWeight: '500',
  },
  itemListActions: {
    flexDirection: 'row',
    width: '22%',
    justifyContent: 'space-between',
  },
});
