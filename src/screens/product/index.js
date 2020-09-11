import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import ShopIcon from '../../assets/icons/carrinho_add_icone_x3.png';

import Image2 from '../../assets/images/2.webp';

import { Wrapper, 
        ProductImage, 
        ProductHeader,
        BackgroundArrow, 
        Container, 
        ProductTitle, 
        InputContainer, 
        InputBox,
        Description,
        Units,
        ContainerBottom,
        AddToCart,
        IconAddCart,
        Buy,
        BuyText
} from './styles';

function Product({ navigation }) {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(parseInt(quantity) + 1);
    }

    const decrement = () => {
        quantity < 1 ? setQuantity(0) : setQuantity(parseInt(quantity) - 1)
    }

    const goBack = () => {
        navigation.navigate('Tab');
    }
    return (
        <Wrapper>
            <ProductHeader>
                <ProductImage
                    source={Image2}
                />
                <BackgroundArrow onPress={() => {
                    goBack()
                }}>
                    <MIcon name="chevron-left" size={40} />
                </BackgroundArrow>

            </ProductHeader>

            
                <Container>
                    <ProductTitle>Nome produto</ProductTitle>

                    <InputContainer>
                        <TouchableOpacity onPress={() => { decrement() }}>
                            <Icon name="minus" size={20} color="#666" style={{padding: 5}}/>
                        </TouchableOpacity>
                        
                        <InputBox defaultValue={quantity.toString()} 
                                  placeholderTextColor="#000" 
                                  onChangeText={() => ({})} 
                                  keyboardType={'numeric'}
                        />
                        
                        <TouchableOpacity onPress={() => { increment() }}>
                            <Icon name="plus" size={20} color="#666" style={{padding: 5}}/>
                        </TouchableOpacity>
                    </InputContainer>

                    <Description>
                        The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early access and releases over the next year!
                    </Description>

                    <Units>
                        <Text>Unidades disponiveis</Text>
                        <Text>2</Text>
                    </Units>

                    <ContainerBottom>
                        <AddToCart onPress={() => {}}>
                            <Image source={ShopIcon} style={{ width: 50, height: 50}} />
                            <IconAddCart>
                                <Icon name="plus" size={10} color="#fff" />
                            </IconAddCart>
                        </AddToCart>

                        <Buy onPress={() => {}} >
                            <BuyText>Comprar agora</BuyText>
                        </Buy>
                    </ContainerBottom>
                </Container>
            

        </Wrapper>
    );
}

export default Product;