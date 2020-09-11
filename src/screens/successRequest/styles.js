import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    background: #f6f6f6;
    padding: 30px;
    padding-bottom: 0;
`;

export const Container = styled.View`
    flex: 1;
    margin-top: 40px;
    justify-content: space-around;
`;

export const SuccessMesage  = styled.Text`
    font-size: 36px;
    color: #444;
    text-align: center;
`;

export const Details = styled.View``;
export const Number = styled.Text`
    font-size: 26px;
    color: #666;
    text-align: center;
    font-weight: bold;
`;

export const TextNumber = styled.Text`
    font-size: 23px;
    color: #666;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    background: rgb(226, 28, 28);
    border-radius: 16px;
    max-width: 200px;
    padding: 20px 30px;
    justify-content: center;
    align-items: center;
    align-self: center;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    color: #fff;
    text-align: center;
`;