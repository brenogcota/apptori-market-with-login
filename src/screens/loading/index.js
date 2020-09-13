import React from 'react';
import { Image, View } from 'react-native';

import Splash from '../../assets/images/splash.png'

export default Loading = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={Splash} style={{resizeMode: 'center', width: '50%'}}/>
        </View>   
    );
}