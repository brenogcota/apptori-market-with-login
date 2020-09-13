import React from 'react';
import { Image } from 'react-native';
import Icon from '../../assets/icons/carrinho_icone_branco_x3.png'

import { Button } from './styles';

function CartButton({ onPress, focused }) {
  return (
    <Button focused={focused} onPress={onPress}>
        <Image source={Icon} style={{width: 24, height: 24}} />
    </Button>
  );
}

export default CartButton;