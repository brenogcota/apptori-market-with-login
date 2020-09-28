import React, { useEffect, useState } from 'react';
import {  View, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import API from '../../services/api';
import Storage from '../../services/storage';


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

  const [orders, setOrders] = useState([]);

  useEffect(()=> {
    (async ()=> {
      try {
        const token = await Storage.get('token');
        const response = await API.getOrders('orderitems', token);
        const { data } = response.data;
        setOrders(data);

      } catch(err) {
        console.log('message: '+err);
      }
    })();

  }, []);

  const data = orders && orders.map(order => ({
    ...order,
    date: formatDate(order.created_at)
  }));

  function formatDate(date) {
    const [newDate, ] = date.split(' ');
    const [year, month, day] = newDate.split('-');
    return `${day}/${month}/${year}`;
  }


  return (
      <Wrapper>
        <Container>
          
          { data ? (data.map( order => {
            return (
              <TouchableWithoutFeedback  key={order.id_orderitems} onPress={()=> {
                navigation.navigate('Sale', {
                  order: order
                });
              }}>
              <Product>
                <ProductImage source={{uri:'http://torimarket.com.br'+order.image}} />
                <ProductDetails>
                  <ProductName>{order.name}</ProductName>
                  <ProductId>#{order.id_orderitems}</ProductId>
                  <SaleDate>{order.date}</SaleDate>
                </ProductDetails>
              </Product>
              </TouchableWithoutFeedback>
            );
          }) ) : (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" />
            </View>
          )}

        </Container>
      </Wrapper>
  );
}

export default Request;