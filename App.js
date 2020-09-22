import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo } from 'react';
import { Provider } from 'react-redux';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './src/store';

import { AuthContext } from './src/context/authContext';
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
import Loading from './src/screens/loading';

const Stack = createStackNavigator();
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
        }
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
          height: 57,
          elevation: 40
        }
      }}
    >

    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name=" " component={Cart} />
    <Tab.Screen name="Pedidos" component={Request} />


    </Tab.Navigator>
  );
}


const App = () => {

  const [Signed, setSigned ] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = await Storage.get('token');
      setSigned(!!token);
      setLoading(false);
    })();

  }, [])

  const authContext = useMemo(() => ({
    signIn: async () => {
        setSigned(true);
    }
  }));
  

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}
          >
              { 
                isLoading && (
                  <Stack.Screen name="Loading" component={Loading} />
                )
              }

              {     
              Signed ? (
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
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;