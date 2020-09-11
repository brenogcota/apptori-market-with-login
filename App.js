import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Storage from './src/services/storage';
import MIcon from 'react-native-vector-icons/MaterialIcons';



/* Login  */
import {Welcome} from './src/pages/Welcome';
import {Login} from './src/pages/Login';
import {InfoPersonal} from './src/pages/Register/InfoPersonal';
import {Address} from './src/pages/Register/Address';
import {Password} from './src/pages/Register/Password';
import {SendEmailRegister} from './src/pages/Register/SendEmail';
import {ForgotPassword} from './src/pages/ForgortPassword';
import {SendEmailForgotPassword} from './src/pages/ForgortPassword/SendEmail';
import {Register} from './src/pages/Register';

/* Home */

import Home from './src/screens/home';
import Cart from './src/screens/cart';
import Request from './src/screens/request';
import Product from './src/screens/product';
import Sale from './src/screens/sale';
import CreditCard from './src/screens/creditCard';
import SuccessRequest from './src/screens/successRequest';
import Chat from './src/screens/chat';
import CartButton from './src/components/cartButton';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTab () {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
              icon = focused ? require('./src/assets/icons/home_icone_ativo_x1.png') : require('./src/assets/icons/home_icone_inativo_x1.png')
              return(
                 <Image source={icon} />
              ); 
          } else if (route.name === ' ') {
            return (
              <CartButton 
                onPress={ () => navigation.navigate(' ')}
              />
            );
          } else if (route.name === 'Pedidos') {
            icon = focused ? require('./src/assets/icons/pedidos_icone_ativo_x1.png') : require('./src/assets/icons/pedidos_icone_inativo_x1.png')
              return(
                 <Image source={icon} />
              );
          }


          return <MIcon name={icon} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >

    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name=" " component={Cart} />
    <Tab.Screen name="Pedidos" component={Request} />


    </Tab.Navigator>
  );
}


const App = () => {

  const [isSigned, setisSigned ] = useState(false);
  


  useEffect(() => {
    async function getToken() {
      const token = await Storage.get('token');
      setisSigned(token);
      console.log(token)
    }

    getToken();
  }, [])
  

  return (
    <>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}
        >

              {
                isSigned ? (
                  <>
                    <Stack.Screen name="Tab" component={HomeTab} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Product" component={Product} />
                    <Stack.Screen name="Sale" component={Sale} />
                    <Stack.Screen name="CreditCard" component={CreditCard} />
                    <Stack.Screen name="SuccessRequest" component={SuccessRequest} />
                    <Stack.Screen name="Chat" component={Chat} />
                  </>
                ) : (
                  <>
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Address" component={Address} />
                    <Stack.Screen  name="Password" component={Password} />
                    <Stack.Screen name="SendEmailRegister" component={SendEmailRegister} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="SendEmailForgotPassword" component={SendEmailForgotPassword} />
                  </>
                  
              )}

            
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};

export default App;
