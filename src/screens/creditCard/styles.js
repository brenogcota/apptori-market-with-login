import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

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
    margin-top: 40px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
`;

export const Back = styled.View`
    flex-direction: row;
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

export const Title = styled.Text`
    font-size: 23px;
    margin-left: 15px;
`;

export const AddCreditCard = styled.TouchableOpacity``;

export const CreditCardShape = styled(LinearGradient)`
    flex: 1;
    justify-content: space-between;
    height: 160px;
    border-radius: 16px;
    margin: 20px 0;
    
`;
export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`;
export const CardRef = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 23px;
    color: #666;
`;
export const CardContent = styled.View`
    font-size: 18px;
    color: #666;
    padding: 20px;
`;
export const CardName = styled.Text.attrs({
    numberOfLines: 3,
})`
    font-size: 18px;
    color: #fff;
`;
export const CardFooter = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    background: #fff;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 5px;
`;

export const EditIcon = styled.TouchableOpacity`
    margin-right: 10px;
`;

export const RemoveIcon = styled.TouchableOpacity`
    margin-right: 10px;
`;

export const ModalContainer = styled.KeyboardAvoidingView`
    flex: 1;
    opacity: 0.9;
    background: #eee;
    justify-content: center;
    align-items: center;
`;
export const ModalContent = styled.View`
    padding: 70px 0;
    padding-top: 20px;
    width: 80%;
    justify-content: center;
    background: #fff; 
    border-radius: 6px;
`;

export const ModalFooter = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
`;

export const ModalInput = styled.TextInput`
    padding: 10px 15px;
    margin: 6px 20px;
    background: #eee;
    border-radius: 6px;
`;

export const ModalButton = styled.TouchableOpacity`
    padding: 20px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: ${props => props.btn ? 'red' : '#fff'};
    border-color: ${props => props.btn ? 'red' : '#eee'};
    border-width: 2px;
`;
export const ModalTextButton = styled.Text`
    color: ${props => props.btn ? '#fff' : '#666'};
    font-weight:  ${props => props.btn ? 'bold' : 500};
`;