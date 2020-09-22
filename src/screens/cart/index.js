import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';

import * as CartActions from '../../store/modules/cart/actions';

import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
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
export default function Cart({ navigation }) {

  const total = useSelector(state => state.cart.reduce((totalSum, product) => {
    return Number(totalSum + product.price * product.amount).toFixed(2);
  }, 0));

  const cart = useSelector(state => state.cart.map(product => ({
    ...product,
    subtotal: Number(product.price * product.amount).toFixed(2),
  })));


  const dispatch = useDispatch();

  const increment = (product) => {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }

  const decrement = (product) => {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
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

        { cart.map( product => { 
            return(
              <Product key={product.id}>
                <ProductImageBox>
                    <ProductImage source={{uri: 'https://torimarket.com.br/'+product.image}} />
                    <RemoveIcon onPress={() => dispatch(CartActions.removeFromCart(product.id))}>
                        <MIcon name="close" size={30} color="#fff"/>
                    </RemoveIcon>
                </ProductImageBox>
                
                <ProductDetails>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>R$ {product.subtotal}</ProductPrice>
                  <InputContainer>
                        <TouchableOpacity onPress={() => { decrement(product) }}>
                            <Icon name="minus" size={20} color="#666"/>
                        </TouchableOpacity>
                              
                        <InputBox defaultValue={product.amount.toString()} 
                                  placeholderTextColor="#000"
                                  keyboardType={'numeric'}
                        />
                              
                        <TouchableOpacity onPress={() => { increment(product) }}>
                            <Icon name="plus" size={20} color="#666"/>
                        </TouchableOpacity>
                  </InputContainer>
                </ProductDetails>
              </Product>
            )
        })}
        
        <AmountBox>
          <Quantity>Quantidade de items: 1</Quantity>
          <Amount>Total: R$ {total}</Amount>
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
