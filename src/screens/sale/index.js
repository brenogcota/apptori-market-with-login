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

function Sale({ navigation }) {

    const goBack = () => {
        navigation.navigate('Pedidos');
    }

    const goTo = (route) => {
        navigation.navigate(route);
    }

    return (
        <Wrapper>
            <ProductHeader>
                <ProductImage
                    source={Image3}
                />
                <BackgroundArrow onPress={() => {
                    goBack()
                }}>
                    <MIcon name="chevron-left" size={40} />
                </BackgroundArrow>

            </ProductHeader>

            
                <Container>
                    <ProductTitle>Nome produto</ProductTitle>


                    <Description>
                        The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early access and releases over the next year!
                    </Description>

                    <Units>
                        <Text>Unidades disponiveis</Text>
                        <Text>2</Text>
                    </Units>

                    <Faq onPress={() => goTo('Chat')}>
                            <Image source={FaqIcon} style={{width: 30, height: 30}}/>
                    </Faq>
                </Container>
            

        </Wrapper>
    );
}

export default Sale;