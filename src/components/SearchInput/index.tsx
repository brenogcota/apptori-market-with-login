import * as React from 'react';
import { TextInputProps} from 'react-native';

import {TextInput} from './styles';

import {Container} from './styles';

interface InputProps extends TextInputProps {
    icon: string;
    
}


const Input: React.FC<InputProps> = ({placeholder, icon, ...rest }) => (
    <Container>
        <TextInput placeholder='Pesquisar...' placeholderTextColor="#8B8B8B" {...rest}/>
    </Container>
)

export default Input;