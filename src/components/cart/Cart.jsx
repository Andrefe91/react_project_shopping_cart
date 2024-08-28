//Css
import "./cart.css";
//Modules
import { useContext } from "react";
//Components
import Product from "../product/Product";
//Context
import { rootContext } from "../../context/rootContext";

export default function Cart() {
	const { cart } = useContext(rootContext);
	const { storeProducts } = useContext(rootContext);

	const idsInCart = Object.keys(cart);

	return (
		<div className="cart-container">
			<h1>Your Cart</h1>
			{storeProducts.map((product) => {
				if (idsInCart.includes(`${product.id}`)) {
					return (
						<Product key={product.id} productInfo={product} extended={false} />
					);
				}
			})}
		</div>
	);
}
