export default function cartTotal(cart, storeProducts) {
    const idsInCart = Object.keys(cart);
    const totalPrice = idsInCart.reduce((total, id) => {
        const product = storeProducts.find((product) => product.id === parseInt(id));
        return total + product.price * cart[id];
    }, 0);

    return totalPrice;
}
