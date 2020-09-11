import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import IconEdit from '../../assets/icons/editar_icone_x1.png';
import IconRemove from '../../assets/icons/excluir_icone_x1.png';

import {    Wrapper, 
            Container,
            Header,
            Back,
            BackgroundArrow,
            Title,
            AddCreditCard,
            CreditCardShape,
            CardHeader,
            CardRef,
            CardContent,
            CardName,
            CardFooter,
            EditIcon,
            RemoveIcon
} from './styles';

function CreditCard({ navigation }) {

    const goBack = () => {
        navigation.navigate(' ');
    }

  return (
        <Wrapper>
            
                <Header>
                    <Back>
                        <BackgroundArrow onPress={() => {
                            goBack()
                        }}>
                            <MIcon name="chevron-left" size={40} color="#fff" />
                        </BackgroundArrow>

                        <Title>Cartões</Title>
                    </Back>

                    <AddCreditCard onPress={() => {}}>
                        <Icon name="plus" size={30} color="#666" />
                    </AddCreditCard>
                    
                </Header>

            <Container>
                <CreditCardShape>
                    <CardHeader>
                        <CardRef>5952 5121 * * *</CardRef>
                        <Icon name="cc-mastercard" size={30} color="#fff" />
                    </CardHeader>

                    <CardContent>
                        <CardName>José Aguiar Silva</CardName>
                    </CardContent>

                    <CardFooter>
                        <EditIcon >
                            <Image source={IconEdit} style={{padding: 10}}/>
                        </EditIcon>

                        <RemoveIcon >
                            <Image source={IconRemove} style={{padding: 10}}/>
                        </RemoveIcon>
                        
                        
                    </CardFooter>
                    
                </CreditCardShape>

                
            </Container>
        </Wrapper>
  );
}

export default CreditCard;