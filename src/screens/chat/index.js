import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import SendIcon from '../../assets/icons/enviar_msg_icone_x3.png';

import { Wrapper, 
         Container,
         ProductHeader,
         BackgroundArrow,
         Info,
         ProductName,
         ProductId,
         MessageFrom,
         MessageTo,
         InputBox,
         Input,
         SendButton
} from './styles';

function Chat({ navigation }) {

    const scrollViewRef = useRef();

    const goBack = () => {
        navigation.navigate('Pedidos')
    }
  return (
      <Wrapper>
          <ProductHeader>
                <BackgroundArrow onPress={() => {
                    goBack()
                }}>
                    <MIcon name="chevron-left" size={40} color="#fff" />
                </BackgroundArrow>

                <Info>
                    <ProductName>Nome do produto</ProductName>
                    <ProductId>#001</ProductId>
                </Info>

            </ProductHeader>

            <Container ref={scrollViewRef}
                       onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >

                <MessageFrom>
                    
                </MessageFrom>

                <MessageTo>
                    
                </MessageTo>

                <MessageTo>
                    
                </MessageTo>

                <MessageFrom>
                    
                </MessageFrom>

                <MessageFrom>
                    
                </MessageFrom>

                <MessageTo>
                    
                </MessageTo>

                <MessageFrom>
                    
                </MessageFrom>


            </Container>
            <InputBox>
                <Input placeholder="Digite aqui" onChangeText={() => ({})} />
                <TouchableOpacity>
                    <SendButton source={SendIcon} />
                </TouchableOpacity>
            </InputBox>
      </Wrapper>
  );
}

export default Chat;