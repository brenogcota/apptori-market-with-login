import React from 'react';

import {    Wrapper, 
            Container, 
            SuccessMesage, 
            Details, 
            Number,
            TextNumber,
            Button, 
            TextButton 
} from './styles';

function SuccessRequest({ route, navigation }) {
  const { data } = route.params;

  return (
      <Wrapper>
          <Container>
              <SuccessMesage>
                  Pedido realizado com sucesso
              </SuccessMesage>

              <Details>
                  <TextNumber>Número do seu pedido</TextNumber>
                  <Number>#{data.code}</Number>
              </Details>

              <Button onPress={() => { navigation.navigate('Pedidos'); }}>
                <TextButton>Ver Pedidos</TextButton>
              </Button>
          </Container>
      </Wrapper>
  );
}

export default SuccessRequest;