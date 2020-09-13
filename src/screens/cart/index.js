import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Image3 from '../../assets/images/3.webp';
import IconCard from '../../assets/icons/cartao_icone_x3.png';

import {  Wrapper, 
          Container,
          Header,
          BackgroundArrow,
          Title,
          Product,
          ProductImageBox,
          ProductImage,
          RemoveIcon,
          ProductDetails,
          ProductName,
          ProductPrice,
          InputContainer, 
          InputBox,
          AmountBox,
          Amount,
          Quantity,
          ContainerBottom,
          AddToCart,
          Buy,
          BuyText
} from './styles';

function Cart({ navigation }) {

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
      setQuantity(parseInt(quantity) + 1);
  }

  const decrement = () => {
      quantity < 2 ? setQuantity(1) : setQuantity(parseInt(quantity) - 1)
  }

  const goTo = (route) => {
    navigation.navigate(route);
  }

  return (
    <Wrapper>
      <Header>
        <BackgroundArrow onPress={() => { navigation.goBack() }}>
           <MIcon name="chevron-left" size={40} color="#fff" />
        </BackgroundArrow>

        <Title>Carrinho</Title>
      </Header>

      <Container>

        <Product>
          <ProductImageBox>
              <ProductImage source={Image3} />
              <RemoveIcon onPress={() => {}}>
                  <MIcon name="close" size={30} color="#fff"/>
              </RemoveIcon>
          </ProductImageBox>
          
          <ProductDetails>
            <ProductName>Nome do produto</ProductName>
            <ProductPrice>R$ 0,00</ProductPrice>
            <InputContainer>
                  <TouchableOpacity onPress={() => { decrement() }}>
                      <Icon name="minus" size={20} color="#666"/>
                  </TouchableOpacity>
                        
                  <InputBox defaultValue={quantity.toString()} 
                            placeholderTextColor="#000" 
                            onChangeText={setQuantity} 
                            keyboardType={'numeric'}
                  />
                        
                  <TouchableOpacity onPress={() => { increment() }}>
                      <Icon name="plus" size={20} color="#666"/>
                  </TouchableOpacity>
            </InputContainer>
          </ProductDetails>
        </Product>
        
        <AmountBox>
          <Quantity>Quantidade de items: 1</Quantity>
          <Amount>Total: 0</Amount>
        </AmountBox>

        <ContainerBottom>
            <AddToCart onPress={() => {goTo('CreditCard')}}>
                <Image source={IconCard} style={{width: 30, height: 30}} />
            </AddToCart>

            <Buy onPress={() => {goTo('SuccessRequest')}} >
                <BuyText>Comprar agora</BuyText>
            </Buy>
        </ContainerBottom>

      </Container>

    </Wrapper>
    
  );
}

export default Cart;