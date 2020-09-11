import React from 'react';
import { Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Image1 from '../../assets/images/1.jpg';
import Image2 from '../../assets/images/2.webp';
import Image3 from '../../assets/images/3.webp';

import { 
        Wrapper, 
        SearchInput,
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
      
      <SearchInput placeholder="Pesquisar..." onChangeText={() => ({})} />
      
      <CategoriesFilter>
        <CategoryFilter active={true}>
          <Text>Produtos Orientais</Text>
        </CategoryFilter>

        <CategoryFilter>
          <Text>Produtos Orientais</Text>
        </CategoryFilter>

        <CategoryFilter>
          <Text>Produtos Orientais</Text>
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
                <ProductName>
                  <Text numberOfLines={1}> Nome produto</Text>
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
                <ProductName>
                  <Text numberOfLines={1}> Nome produto</Text>
                </ProductName>
              </Product>
            </TouchableWithoutFeedback>            

          </Products>


          <Products>
            <Product>
              <ProductImage
                source={Image3}
              />
              <ProductPrice>
                <LightSmallText>R$ 00,0</LightSmallText>
              </ProductPrice>
              <ProductName>
                <Text numberOfLines={1}> Nome produto</Text>
              </ProductName>
            </Product>

            <Product>
              <ProductImage
                source={Image1}
              />
              <ProductPrice>
                <LightSmallText>R$ 00,0</LightSmallText>
              </ProductPrice>
              <ProductName>
                <Text numberOfLines={1}> Nome produto</Text>
              </ProductName>
            </Product>

          </Products>

      </Container>

    </Wrapper>
  );
}
