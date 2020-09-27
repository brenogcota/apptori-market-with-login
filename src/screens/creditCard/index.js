import React, { useState, useEffect } from 'react';
import {
        View,
        Text,
        Image,
        Alert,
        Modal,
} from "react-native";

import Storage from '../../services/storage';

import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import IconEdit from '../../assets/icons/editar_icone_x3.png';
import IconRemove from '../../assets/icons/excluir_icone_x3.png';

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
            RemoveIcon,
            ModalContainer,
            ModalContent,
            ModalInput,
            ModalFooter,
            ModalButton,
            ModalTextButton,
} from './styles';

const colors = 
    {
        a: '#fd1d1d',
        b: '#eeaa65',
        c: '#1dfddc',
        d: '#7965ee',
        e: '#7b80c8',
        f: '#ee65af'
    }

function CreditCard({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cards, setCard] = useState([]);

    const handleCreditCard = () => {

        const card = [...cards, {
            name: cardName,
            number: cardNumber
        }];

        setCard(card);
        Storage.setKey('ccard', card);
        
        setCardName('');
        setCardNumber('');
        setModalVisible(false);
        
         
    };


    const removeCreditCard = number => {
        const card = cards.filter(card => card.number !== number);
        setCard(card)
        Storage.setKey('ccard', card);

    }

   /* method incomplete 
    *const editCreditCard = (cardName, cardNumber) => {
    *   cardIndex = cards.findIndex((obj => obj.number === cardNumber));
    *
    *   cards[cardIndex].name = cardName;
    }*/

    useEffect(() => {
       
        Storage.get('ccard').then( value => {
            value !== null ? setCard(value) : null;
        })

    }, []);


    return (

        <Wrapper>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <ModalContainer behavior="height">
                        <ModalContent>
                            <ModalInput 
                                placeholder="Número do cartão "
                                value={cardNumber}
                                onChangeText={ (text) => setCardNumber(text)}
                                keyboardType={'numeric'}
                            />
                            <ModalInput 
                                placeholder="Nome " 
                                value={cardName}
                                onChangeText={(text) => setCardName(text)}
                            />

                            <ModalFooter>
                                <ModalButton btn='end' onPress={ () => {handleCreditCard()}}>
                                    <ModalTextButton btn='end'>Finalizar</ModalTextButton>
                                </ModalButton>

                                <ModalButton onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                    <ModalTextButton>Cancelar</ModalTextButton>
                                </ModalButton>
                            </ModalFooter>

                        </ModalContent>
                    </ModalContainer>
                </Modal>
            
                <Header>
                    <Back>
                        <BackgroundArrow onPress={() => { navigation.goBack() }}>
                            <MIcon name="chevron-left" size={40} color="#fff" />
                        </BackgroundArrow>

                        <Title>Cartões</Title>
                    </Back>

                    <AddCreditCard onPress={() => {
                        setModalVisible(true);
                    }}>
                        <Icon name="plus" size={30} color="#666" />
                    </AddCreditCard>
                </Header>

            <Container>

                { cards ? cards.map( card => {
                    return (
                        <CreditCardShape key={card.number}
                            colors={[colors.c, colors.d]}
                            start={{x: 0, y: 1.5}}
                            end={{x: 0.9, y: 0}}
                        >
                            <CardHeader>
                            <CardRef>{card.number} *** **</CardRef>
                                <Icon name="cc-mastercard" size={30} color="#fff" />
                            </CardHeader>
                            <CardContent>
                                <CardName>{card.name}</CardName>
                            </CardContent>
                            <CardFooter>
                                <EditIcon onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                    <Image source={IconEdit} style={{padding: 10, width: 20, height: 20}}/>
                                </EditIcon>
                                <RemoveIcon onPress={() => { removeCreditCard(card.number)}}>
                                    <Image source={IconRemove} style={{padding: 10, width: 20, height: 20}}/>
                                </RemoveIcon>
                            </CardFooter> 
                        </CreditCardShape>     

                    )}): (
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                            <Text>Você ainda não possui nenhum cartão cadastrado.</Text>
                        </View>
                    ) }

            </Container>
        </Wrapper>
   );
}

export default CreditCard;