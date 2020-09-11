import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    background: #fff;
    padding: 10px;
    padding-top: 0;
`;

export const Container = styled.ScrollView.attrs({
    horizontal: false,
    showsVerticalScrollIndicator: false
})`
    margin-bottom: 60px;
`;

export const ProductHeader = styled.View`
    flex-direction: row;
    margin: 30px;
    margin-bottom: 0;
    height: 100px;
    align-items: center;
`;

export const BackgroundArrow = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background: rgb(226, 28, 28);
    padding: 10px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;

`;

export const Info = styled.View`
    margin: 0 20px;
`;

export const ProductName = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 20px;
    color: #666;
    font-weight: bold;
`;

export const ProductId = styled.Text`
    font-size: 18px;
    color: #666;
`;

export const MessageFrom = styled.View`
    width: 60%;
    min-height: 56px;
    margin: 20px;
    background: rgba(226, 28, 28, 0.3);
    position: relative;
    align-self: flex-start;
    border-radius: 16px;
`;

export const MessageTo = styled.View`
    width: 50%;
    min-height: 56px;
    margin: 20px;
    background: rgba(226, 28, 28, 0.6);
    position: relative;
    align-self: flex-end;
    border-radius: 16px;
`;

export const InputBox = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
    background: #fff;

`;
export const Input = styled.TextInput`
    background: #f3f3f3;
    width: 75%;
    height: 56px;
    border-radius: 16px;
    padding: 0 10px;
    font-size: 18px;
`;
export const SendButton = styled.Image`
    width: 60px;
    height: 60px;
`;
