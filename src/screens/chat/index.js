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

function Chat({ route, navigation }) {
    const { order } = route.params;


    const scrollViewRef = useRef();

  return (
      <Wrapper>
          <ProductHeader>
                <BackgroundArrow onPress={() => { navigation.goBack() }}>
                    <MIcon name="chevron-left" size={40} color="#fff" />
                </BackgroundArrow>

                <Info>
                    <ProductName>{order.name}</ProductName>
                    <ProductId>#{order.id_orderitems}</ProductId>
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