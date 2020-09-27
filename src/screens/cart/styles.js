import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    background: #f6f6f6;
    padding: 30px;
    padding-bottom: 0;
`;

export const Container = styled.ScrollView.attrs({
    horizontal: false,
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    margin-top: 5px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
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

export const Title = styled.Text`
    font-size: 23px;
    margin-left: 15px;
`;

export const Product = styled.View`
    flex: 1;
    flex-direction: row;
    height: 140px;
    background: #eee;
    border-radius: 16px;
    margin: 15px 0;
`;

export const ProductImageBox = styled.View`
    flex: 1;
    min-width: 50%;
    background: #fff;
    border-radius: 16px;
`;

export const ProductImage = styled.Image`
    flex: 1;
    min-width: 50%;
    background: #fff;
    width: null;
    height: null;
    border-radius: 16px;
    border-radius: 16px;
`;

export const RemoveIcon = styled.TouchableOpacity`
    background: #666;
    width: 52px;
    height: 52px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 5px;
    bottom: 5px;
`;

export const ProductDetails = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    min-width: 50%;
`;

export const ProductName = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 16px;
    padding: 10px;
`;
export const ProductPrice = styled.Text`
    color: #666;
    padding: 10px;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 6px 20px;
    margin: 15px 0;
    margin-bottom: -1px;
    border-bottom-right-radius: 16px;
    background: #e1e1e1;
`;

export const InputBox = styled.TextInput`
    font-size: 16px;
`;

export const AmountBox = styled.View`
    flex: 1;
    height: 120px;
    background: #eee;
    border-radius: 16px;
    padding: 20px;
    margin: 20px 0;
`;

export const Amount = styled.Text`
    color: #666;
    font-size: 16px;
    margin: 5px 0;
    font-weight: bold;
`;

export const Quantity = styled.Text`
    color: #666;
    font-size: 16px;
    margin: 5px 0;
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
`;

export const ContainerBottom = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    min-width: 100%;
    margin-top: 40px;
    padding-bottom: 10%;
`;

export const AddToCart = styled.TouchableOpacity`
    border: 1px solid rgb(226, 28, 28);
    border-radius: 16px;
    padding: 10px;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
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