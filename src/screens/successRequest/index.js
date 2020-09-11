import React from 'react';
import { Text } from 'react-native';

import {    Wrapper, 
            Container, 
            SuccessMesage, 
            Details, 
            Number,
            TextNumber,
            Button, 
            TextButton 
} from './styles';

function SuccessRequest({ navigation }) {

    const goBack = () => {
        navigation.navigate('Pedidos');
    }
    
  return (
      <Wrapper>
          <Container>
              <SuccessMesage>
                  Pedido realizado com sucesso
              </SuccessMesage>

              <Details>
                  <TextNumber>Número do seu pedido</TextNumber>
                  <Number>#001</Number>
              </Details>

              <Button onPress={() => goBack()}>
                <TextButton>Ver Pedidos</TextButton>
              </Button>
          </Container>
      </Wrapper>
  );
}

export default SuccessRequest;