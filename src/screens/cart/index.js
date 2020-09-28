import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';

import * as CartActions from '../../store/modules/cart/actions';
import API from '../../services/api';
import Storage from '../../services/storage';

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


  useEffect(() => {
    Storage.get('cart').then(products => {
          dispatch(CartActions.addFromStorage(products));
    });

  }, [])

  const total = useSelector(state => state.cart.reduce((totalSum, product) => {
    return totalSum + product.price * product.amount;
  }, 0));

  const totalItems = useSelector(state => state.cart.reduce((totalSum, product) => {
    return totalSum + 1 * product.amount;
  }, 0));

  const cart = useSelector(state => state.cart.map((product) => ({
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

  const makeOrder = async (total, cart) => {
      const products = cart.map(product => ({
        product_id: product.id,
        unitary_value: product.price,
        quantity: product.amount
      }))

      const data = {
        total_value: total.toFixed(2),
        products: products
      }

      const token = await Storage.get('token');
      API.makeOrder(data, 'orders/create', token).then(response => {
        navigation.navigate('SuccessRequest', {
          data: response
        })
      }).catch(err => {
        console.log(err.response);
      });
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
                    <RemoveIcon onPress={() => {dispatch(CartActions.removeFromCart(product.id))}}>
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
          <Quantity>Quantidade de items: {totalItems}</Quantity>
          <Amount>Total: R$ {total.toFixed(2)}</Amount>
        </AmountBox>

        <ContainerBottom>
            <AddToCart onPress={() => {goTo('CreditCard')}}>
                <Image source={IconCard} style={{width: 30, height: 30}} />
            </AddToCart>

            <Buy onPress={() => {makeOrder(total, cart)}} >
                <BuyText>Comprar agora</BuyText>
            </Buy>
        </ContainerBottom>

      </Container>

    </Wrapper>
    
  );
}
