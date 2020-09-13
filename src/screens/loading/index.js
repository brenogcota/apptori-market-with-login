import React from 'react';
import { Text, View } from 'react-native';

export default Loading = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#666', alignItems: 'center', justifyContent: 'center'}}> 
            <Text style={{color: '#fff', fontSize: 28}}>Loading...</Text>
        </View> 
    );
}