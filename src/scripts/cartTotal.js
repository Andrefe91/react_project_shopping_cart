export default function cartTotal(cart, storeProducts) {
	const idsInCart = Object.keys(cart);

	const totalCart = idsInCart.reduce((total, id) => {
		const product = storeProducts.find(
			(product) => product.id === parseInt(id),
		);
		return total + product.price * cart[id];
	}, 0);

	const totalShipping = idsInCart.reduce((total, id) => {
		const product = storeProducts.find(
			(product) => product.id === parseInt(id),
		);

		if (product.price > 100) {
			return total;
		} else {
			return total + product.price * 0.075 * cart[id];
		}
	}, 0);

	return {
		totalCart: Number(totalCart.toFixed(2)),
		totalShipping: Number(totalShipping.toFixed(2)),
		total: Number((totalCart + totalShipping).toFixed(2)),
	};
}
