import React from 'react';
import { Image } from 'react-native';
import Icon from '../../assets/icons/carrinho_icone_branco_x1.png'

import { Button } from './styles';

function CartButton({ onPress }) {
  return (
    <Button onPress={onPress}>
        <Image source={Icon} />
    </Button>
  );
}

export default CartButton;