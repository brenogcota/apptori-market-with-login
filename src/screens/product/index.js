import React, { useState } from 'react';
import { Text, Image, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import ShopIcon from '../../assets/icons/carrinho_add_icone_x3.png';

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

export default function Product({ route, navigation }) {

    const [quantity, setQuantity] = useState(1);
    const { product } = route.params;

    const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
        sumAmount[product.id] = product.amount;
        return sumAmount;
    }, {}));

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravityAndOffset(
          'Produto já adicionado ao carrinho!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          200
        );
    };

    const dispatch = useDispatch();

    const increment = () => {
        quantity < 1 ? setQuantity(1) : setQuantity(quantity +1);
    }

    const decrement = () => {
        quantity <= 1 ? setQuantity(1) : setQuantity(quantity -1);
    }

    const handleAddProduct = (product, quantity) => {
        if(amount[product.id] >= 1) {
            return showToastWithGravity();
        } else {
            dispatch(CartActions.addToCart(product, Number(quantity)));
            navigation.navigate(' ');
        }
    };

    

    return (
        <Wrapper>
            <ProductHeader>
                <ProductImage
                    source={{uri: 'http://torimarket.com.br/'+product.image}}
                />
                <BackgroundArrow onPress={() => { navigation.goBack() }}>
                    <MIcon name="chevron-left" size={40} />
                </BackgroundArrow>

            </ProductHeader>

            
                <Container>
                    <ProductTitle>{product.name}</ProductTitle>

                    <InputContainer>
                        <TouchableOpacity onPress={() =>  { decrement(product)} }>
                            <Icon name="minus" size={20} color="#666" style={{padding: 5}}/>
                        </TouchableOpacity>
                        
                        <InputBox defaultValue={quantity.toString()} 
                                  placeholderTextColor="#000"
                                  keyboardType={'numeric'}
                        />
                        
                        <TouchableOpacity onPress={() => {increment(product)} }>
                            <Icon name="plus" size={20} color="#666" style={{padding: 5}}/>
                        </TouchableOpacity>
                    </InputContainer>

                    <Description>
                        {product.description}
                    </Description>

                    <Units>
                        <Text>Unidades disponiveis</Text>
                        <Text>{product.stock}</Text>
                    </Units>

                    <ContainerBottom>
                        <AddToCart onPress={() => { handleAddProduct(product, quantity)}}>
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
