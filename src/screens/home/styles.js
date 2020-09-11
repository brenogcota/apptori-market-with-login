import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    padding: 10px;
    padding-bottom: 0;
    margin-top: 20px;
    background: #f6f6f6;
`;

export const Container = styled.ScrollView.attrs({
    horizontal: false,
    showsVerticalScrollIndicator: false
})``;

export const SearchInput = styled.TextInput`
    height: 42px;
    width: 100%;
    background: #e1e1e1;
    margin: 25px 0;
    padding: 10px;
    border-radius: 16px;
`;

export const CategoriesFilter = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    margin: 20px 0;
    min-height: 62px;
`;

export const CategoryFilter = styled.TouchableOpacity`
    padding: 18px;
    margin: 0 6px;
    justify-content: center;
    border: 2px solid ${props => props.active ? "rgb(226, 28, 28)" : "#ddd"};
    border-radius: 16px;
`;

export const TextBig = styled.Text`
    font-size: 22px;
    color: #666;
`;

export const Promotions = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    margin: 20px 0;
    height: 160px;
`;

export const PromotionImage = styled.Image`
    flex: 1;
    width: null;
    height: null;
    border-radius: 16px;
    opacity: 0.6;
`;

export const Promotion = styled.View`
    width: 280px;
    background: #ccc;
    margin-right: 10px;
    border-radius: 16px;
`;

export const Label = styled.Text`
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    position: absolute;
    z-index: 2;
    bottom: 5px;
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
    height: 140px;
`;

export const Product = styled.View`
    width: 180px;
    background: #ccc;
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
    background: #fff;
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
    top: 25%;
    align-self: flex-end;
    right: 10px;
    align-items: center;
    justify-content: center;
    
    z-index: 2;
`;

export const LightSmallText = styled.Text`
    color: #fff;
`;