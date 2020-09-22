import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';


import Home from '../../screens/home';
import Cart from '../../screens/cart';
import Request from '../../screens/request';
import CartButton from '../../components/cartButton';


const Tab = createBottomTabNavigator();

function HomeTab () {
    return (
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
  
            if (route.name === 'Home') {
                icon = focused ? require('./src/assets/icons/home_icone_ativo_x3.png') : require('./src/assets/icons/home_icone_inativo_x3.png')
                return(
                   <Image source={icon} style={{width: 24, height: 24}} />
                ); 
            } else if (route.name === ' ') {
              return (
                <CartButton focused={focused}
                  onPress={ () => navigation.navigate(' ')}
                />
              );
            } else if (route.name === 'Pedidos') {
              icon = focused ? require('./src/assets/icons/pedidos_icone_ativo_x3.png') : require('./src/assets/icons/pedidos_icone_inativo_x3.png')
                return(
                   <Image source={icon} style={{width: 24, height: 24}} />
                );
            }
  
  
            return <MIcon name={icon} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          style: {
            height: 57,				
            elevation: 30,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12
            },
            shadowOpacity: 0.5,
            shadowRadius: 16.00
          }
        }}
      >
  
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name=" " component={Cart} />
      <Tab.Screen name="Pedidos" component={Request} />
  
  
      </Tab.Navigator>
    );
}

export default HomeTab;