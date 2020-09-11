import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    background: #fff;
`;

export const ProductHeader = styled.View`
    height: 180px;
    background: #ccc;
`;

export const ProductImage = styled.Image`
    flex: 1;
    width: null;
    height: null;
`;

export const BackgroundArrow = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background: #fff;
    padding: 10px;
    margin: 30px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;

    position: absolute;
    z-index: 1;
`;

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #fff;
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;

    bottom: 25px;
`;

export const ProductTitle = styled.Text`
    color: #666;
    font-size: 22px;
    font-weight: bold;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 3,
})`
    color: #666;
    font-size: 20px;
    margin: 20px 0;
`;

export const Units = styled.View`
`;


export const Faq = styled.TouchableOpacity`
    border: 1px solid rgb(226, 28, 28);
    width: 70px;
    border-radius: 16px;
    padding: 15px;
    margin: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
`;
