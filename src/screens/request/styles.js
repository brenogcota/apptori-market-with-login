import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    background: #f6f6f6;
    margin-top: 30px;
`;

export const Container = styled.ScrollView.attrs({
    horizontal: false,
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    margin-top: 20px;
    padding: 30px;
`;

export const Product = styled.View`
    flex: 1;
    flex-direction: row;
    height: 140px;
    background: #eee;
    border-radius: 16px;
    margin: 20px 0;
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

export const ProductDetails = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    min-width: 50%;
    padding: 10px;
`;

export const ProductName = styled.Text`
    font-size: 16px;
`;
export const ProductId = styled.Text`
    color: #666;
`;
export const SaleDate = styled.Text`
    color: #666;
`;



