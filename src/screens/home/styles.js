import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    padding: 10px;
    padding-top: 40px;
    padding-bottom: 0;
    background: #f6f6f6;
`;

export const Container = styled.ScrollView.attrs({
    horizontal: false,
    showsVerticalScrollIndicator: false
})``;

export const SearchBox = styled.View`
    flex-direction: row;
    flex: 1;
    min-height: 40px;
    max-height: 40px;
    border-radius: 12px;
    background: #f1f1f1;
    align-items: center;
`;

export const SearchInput = styled.TextInput`
    font-size: 18px;
    padding-right: 46px;
    padding-left: 20px;
`;

export const UserImageButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    position: absolute;
    right: 10px;
`;

export const CategoriesFilter = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    margin: 20px 0;
    min-height: 32px;
    max-height: 32px;
`;

export const CategoryFilter = styled.TouchableOpacity`
    padding: 8px 12px;
    margin: 0 6px;
    justify-content: center;
    border: 1.6px solid ${props => props.border};
    border-radius: 12px;
`;

export const TextBig = styled.Text`
    font-size: 18px;
    color: #c4c4c4;
`;

export const Promotions = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    margin: 20px 0;
    height: 130px;
`;

export const PromotionImage = styled.Image`
    flex: 1;
    width: null;
    height: null;
    border-radius: 16px;
    opacity: 0.6;
`;

export const Promotion = styled.View`
    width: 260px;
    background: #ccc;
    margin-right: 10px;
    border-radius: 16px;
`;

export const Label = styled.Text`
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    z-index: 2;
    bottom: 10px;
    right: 110px;
`;
export const LabelPercent = styled.Text`
    color: rgb(226, 28, 28);
    font-size: 48px;
    font-weight: bold;
    position: absolute;
    z-index: 2;
    bottom: 5px;
    right: 10px;
`;

export const Products = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    margin: 20px 0;
    height: 130px;
`;

export const Product = styled.View`
    width: 140px;
    min-height: 100px;
    background: #ddd;
    margin-right: 12px;
    border-radius: 16px;
`;

export const ProductImage = styled.Image`
    flex: 1;
    width: null;
    height: null;
    border-radius: 16px;
`;

export const ProductName = styled.View`
    height: 42px;
    background: ${props => props.background};
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ProductPrice = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #333;
    position: absolute;
    top: 32px;
    align-self: flex-end;
    right: 10px;
    align-items: center;
    justify-content: center;
    
    z-index: 2;
`;

export const LightSmallText = styled.Text`
    color: #fff;
    font-size: 10px;
`;