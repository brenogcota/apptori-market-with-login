import * as React from 'react';

import {Text, View, Image, ImageProps, ImageSourcePropType, TouchableOpacity} from 'react-native';

import {Container, Price } from './style';

interface FeaturedProductProps extends ImageProps {
    source: ImageSourcePropType;
    price: string;
    
}


const FeaturedProduct: React.FC<FeaturedProductProps> = ({ source, children, price}) => (

    
        <Container>
            
        <TouchableOpacity>
            <Image resizeMethod='auto' resizeMode='cover' style={{width: 150, height: 150, borderRadius: 20}}  source={source}/>
            <Price>
                <Text style={{color: '#FFF'}}>R${price}</Text>
            </Price>
            {children}
        </TouchableOpacity>
        

            
        
            
        </Container>
    


);


export default FeaturedProduct;