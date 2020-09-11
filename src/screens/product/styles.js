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

export const Container = styled.ScrollView.attrs({
    horizontal: false,
    showsVerticalScrollIndicator: false
})`
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

export const InputContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 6px 20px;
    margin: 15px 0;
    width: 150px;
    border-radius: 16px;
    background: #e1e1e1;
`;

export const InputBox = styled.TextInput`
    font-size: 22px;
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

export const ContainerBottom = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    min-width: 100%;
    margin-top: 40px;
    padding-bottom: 20%;
`;

export const AddToCart = styled.TouchableOpacity`
    border: 1px solid rgb(226, 28, 28);
    border-radius: 16px;
    padding: 10px;
`;

export const IconAddCart = styled.View`
    background: orange;
    width: 26px;
    height: 26px;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    position: absolute;
    right: -10px;
    top: -5px;
`;

export const Buy = styled.TouchableOpacity`
    background: rgb(226, 28, 28);
    border-radius: 16px;
    padding: 20px 25px;
`;

export const BuyText = styled.Text`
    font-size: 20px;
    color: #fff;
`;