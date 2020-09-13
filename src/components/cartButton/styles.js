import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background: ${props => props.focused ?  'rgb(226, 28, 28)' : 'red'};
    align-items: center;
    justify-content: center;
    bottom: ${props => props.focused ?  '12px' : '10px'};
`;