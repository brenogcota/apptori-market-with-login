import React, { useState } from 'react';
import { Text, Image, TouchableWithoutFeedback } from 'react-native';

import Image1 from '../../assets/images/1.jpg';
import Image2 from '../../assets/images/2.webp';
import Image3 from '../../assets/images/3.webp';
import UserIcon from '../../assets/icons/perfil_icone_x3.png';

import { 
        Wrapper, 
        SearchBox,
        SearchInput,
        UserImage,
        CategoriesFilter,
        CategoryFilter,
        TextBig,
        Promotions,
        Promotion,
        PromotionImage,
        Label,
        LabelPercent,
        Products,
        Product,
        ProductImage,
        ProductName,
        ProductPrice,
        LightSmallText,
        Container
} from './styles';
 
export default function Home({ navigation }) {

  const goTo = () => {
    navigation.navigate('Product');
  }

  return (
    <Wrapper>
      
      <SearchBox>
        <SearchInput 
          placeholder="Pesquisar..." 
          onChangeText={() => ({})}
        />
        <UserImage source={UserIcon} />
      </SearchBox>
      
      <CategoriesFilter>
        <CategoryFilter border="red">
          <Text style={{ color: 'rgb(226, 28, 28)', fontSize: 16}}>Produtos orientais</Text>
        </CategoryFilter>

        <CategoryFilter border="green">
          <Text style={{ color: 'green', fontSize: 16}}>Produtos naturais</Text>
        </CategoryFilter>

      </CategoriesFilter>

      <Container>

          <TextBig>Promoções</TextBig>

          <Promotions>
            <Promotion>
              <PromotionImage
                source={Image1}
              />
              <Label>Até</Label>
              <LabelPercent>70%</LabelPercent>
            </Promotion>

            <Promotion>
              <PromotionImage
                source={Image2}
              />
            </Promotion>

            <Promotion>
              <PromotionImage
                source={Image3}
              />
            </Promotion>
            

          </Promotions>

          <TextBig>Destaques</TextBig>

          <Products>

            <TouchableWithoutFeedback onPress={()=> {
              goTo()
            }}>
              <Product>
                <ProductImage
                  source={Image1}
                />
                <ProductPrice>
                  <LightSmallText>R$ 00,0</LightSmallText>
                </ProductPrice>
                <ProductName background="#FA4F54">
                  <Text numberOfLines={1} style={{ color: '#fff'}}> Nome produto</Text>
                </ProductName>
              </Product>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=> {
              goTo()
            }}>
              <Product>
                <ProductImage
                  source={Image2}
                />
                <ProductPrice>
                  <LightSmallText>R$ 00,0</LightSmallText>
                </ProductPrice>
                <ProductName background="#F8935A">
                  <Text numberOfLines={1} style={{ color: '#fff'}}> Nome produto</Text>
                </ProductName>
              </Product>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=> {
              goTo()
            }}>
              <Product>
                <ProductImage
                  source={Image3}
                />
                <ProductPrice>
                  <LightSmallText>R$ 00,0</LightSmallText>
                </ProductPrice>
                <ProductName background="#FADE5F">
                  <Text numberOfLines={1} style={{ color: '#fff'}}> Nome produto</Text>
                </ProductName>
              </Product>
            </TouchableWithoutFeedback>          

          </Products>


      </Container>

    </Wrapper>
  );
}
