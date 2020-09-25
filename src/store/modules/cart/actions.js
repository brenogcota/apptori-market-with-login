export function addToCart(product, quantity) {
    return {
        type: 'ADD_TO_CART',
        product,
        quantity,
    };
}

export function removeFromCart(id) {
    return { 
        type: 'REMOVE_FROM_CART', 
        id: id
    };
}

export function updateAmount(id, amount) {
    return {
        type: 'UPDATE_AMOUNT',
        id,
        amount
    };
}

export function addFromStorage(products) {
    return {
        type: 'ADD_FROM_STORAGE',
        products
    };
}