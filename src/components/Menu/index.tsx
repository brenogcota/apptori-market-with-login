import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {useState} from 'react';

import {MenuBar, Car} from './style';



const Menu: React.FC = () => {

    const [menu, setMenu] = useState(false);
    const [requests, setRequests] = useState(false);

    function IncrementationToChangeStyleOfMenu() {
        setMenu(!menu);
        
    }

    function IncrementationToChangeStyleOfRequests() {
        setRequests(!requests);
        
    }

    return (
    <MenuBar>

        <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginLeft: '10%', marginRight: '10%', marginTop: '5%'}}>
            
            <TouchableOpacity onPress={() => IncrementationToChangeStyleOfMenu()} style={{width: 100, height: 200, alignItems: 'center'}}>

                {menu 
                ? 
                <>
                <Image resizeMode='contain' style={{width: 30, height: 30}} source={require('../../assets/icons/home_icone_ativo_x3.png')}/>
                <Text style={{color: '#000'}}>Home</Text>
                </>
                : 
                <>
                <Image style={{width: 30, height: 30, }} source={require('../../assets/icons/home_icone_inativo_x3.png')}/>
                <Text style={{}}>Home</Text>
                </>
            }
                
                
            </TouchableOpacity>

            <Car>
                <Image resizeMode='contain' style={{width: 30, height: 30}} source={require('../../assets/icons/carrinho_icone_branco_x3.png')} />
            </Car>
                    
            <TouchableOpacity onPress={() => IncrementationToChangeStyleOfRequests()} style={{width: 100, height: 200, alignItems: 'center'}}>
                {requests 
                ? 
                <>
                <Image resizeMode='contain' style={{width: 30, height: 30}} source={require('../../assets/icons/pedidos_icone_ativo_x3.png')}/>
                <Text style={{color: '#000'}}>Pedidos</Text>
                </>
                : 
                <>
                <Image style={{width: 30, height: 30, }} source={require('../../assets/icons/pedidos_icone_inativo_x3.png')}/>
                <Text style={{}}>Pedidos</Text>
                </>
            }
                
                
            </TouchableOpacity>
        </View>

        
            
       
        
        
        


    </MenuBar>




)};

export default Menu;

