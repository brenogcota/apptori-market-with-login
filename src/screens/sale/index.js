import React from 'react';
import { Text, Image } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Image3 from '../../assets/images/3.webp';
import FaqIcon from '../../assets/icons/chat_icone_x3.png';

import { Wrapper, 
        ProductHeader,
        ProductImage, 
        BackgroundArrow, 
        Container, 
        ProductTitle, 
        Description,
        Units,
        Faq,
} from './styles';

function Sale({ route, navigation }) {
    const { order } = route.params;

 
    return (
        <Wrapper>
            <ProductHeader>
                <ProductImage
                    source={{uri:'https://torimarket.com.br/'+order.image}}
                />
                <BackgroundArrow onPress={() => { navigation.goBack() }}>
                    <MIcon name="chevron-left" size={40} />
                </BackgroundArrow>

            </ProductHeader>

            
                <Container>
                    <ProductTitle>{order.name}</ProductTitle>
                    <Description>{order.description}</Description>
                    <Units>
                        <Text>Unidades disponiveis</Text>
                        <Text>{order.stock}</Text>
                    </Units>

                    <Faq onPress={() => navigation.navigate('Chat', {
                        order: order
                    })}>
                            <Image source={FaqIcon} style={{width: 30, height: 30}}/>
                    </Faq>
                </Container>
            

        </Wrapper>
    );
}

export default Sale;