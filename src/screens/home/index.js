import React, { useState, useEffect } from 'react';
import { Text, Image, TouchableWithoutFeedback } from 'react-native';

import Storage from '../../services/storage';
import API from '../../services/api';

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

  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      const token = await Storage.get('token');
  
      API.getProducts('products', token)
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch((error) => {
          console.log(error.response);
        });

      API.getCategories('categories', token)
        .then((response) => {
          setCategories(response.data.data);
          console.debug('category__'+categories);
        })
        .catch((error) => {
          console.log(error.response);
        });
    })();

  }, [])

  

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
        { categories ? categories.map(category => {
          return (
            <CategoryFilter key={category.id} border="green">
              <Text style={{ color: 'green', fontSize: 16}}>{category.name}</Text>
            </CategoryFilter>
          ) 
        }) : (
          <CategoryFilter border="gray">
            <Text style={{ color: 'gray', fontSize: 16}}>Categorias</Text>
          </CategoryFilter>
        )}

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

            { products ? products.map( product => {
                return (
                  <TouchableWithoutFeedback key={product.id} onPress={()=> {
                    navigation.navigate('Product', {
                      product: product,
                    });
                  }}>
                    <Product>
                      <ProductImage
                        source={{uri:'https://torimarket.com.br/'+product.image}}
                      />
                      <ProductPrice>
                        <LightSmallText numberOfLines={1}>R$ {product.price}</LightSmallText>
                      </ProductPrice>
                      <ProductName background="#FA4F54">
                        <Text numberOfLines={1} style={{ color: '#fff'}}> {product.name}</Text>
                      </ProductName>
                    </Product>
                  </TouchableWithoutFeedback>
                )
            }) : (
              <>
               <Product></Product>
               <Product></Product>
               <Product></Product>
              </>
            )
          
          }
        

          </Products>


      </Container>

    </Wrapper>
  );
}
