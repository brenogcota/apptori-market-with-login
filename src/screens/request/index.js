import React from 'react';
import {  TouchableWithoutFeedback } from 'react-native';

import Image3 from '../../assets/images/3.webp';

import {  Wrapper, 
          Container,
          Product,
          ProductImage,
          ProductDetails,
          ProductName,
          ProductId,
          SaleDate
} from './styles';

function Request({ navigation }) {

  const goTo = () => {
    navigation.navigate('Sale');
  }

  return (
      <Wrapper>
        <Container>
          
          <TouchableWithoutFeedback onPress={()=> {
              goTo()
          }}>
          <Product>
            <ProductImage source={Image3} />
            <ProductDetails>
              <ProductName>Nome do produto</ProductName>
              <ProductId>#0011</ProductId>
              <SaleDate>02/09/2020</SaleDate>
            </ProductDetails>
          </Product>
          </TouchableWithoutFeedback>

        </Container>
      </Wrapper>
  );
}

export default Request;