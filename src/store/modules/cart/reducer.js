import produce from 'immer';
import Storage from '../../../services/storage';

export default function cart(state = [], action) {
    switch(action.type) {
        case 'ADD_TO_CART': 
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product.id);
                if(productIndex >= 0 ) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.product,
                        amount: action.quantity,
                    })
                }
                Storage.setKey('cart', draft);
            });
        case 'REMOVE_FROM_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if(productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
                Storage.remove('cart');
                Storage.setKey('cart', draft);
            })
        case 'UPDATE_AMOUNT': {
            
            if(action.amount <= 0) {
                return state;
            }

            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if(productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            })
        }
        case 'ADD_FROM_STORAGE': {
            return produce(state, draft => {
                action.products.map(product => {
                    const productIndex = draft.findIndex(p => p.id === product.id);
                    if(productIndex >= 0) {
                        draft[productIndex].amount += 1;
                    } else {
                        draft.push(product);
                    }
                })
            });
        }
        default: 
            return state;
    }
}