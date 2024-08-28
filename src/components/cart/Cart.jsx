//Css
import "./cart.css";
//Modules
import { useContext } from "react";
//Components
import Product from "../product/Product";
import EmptyCart from "../emptyCart/EmptyCart";
//Context
import { rootContext } from "../../context/rootContext";

export default function Cart() {
	const { cart } = useContext(rootContext);
	const { storeProducts } = useContext(rootContext);

	const idsInCart = Object.keys(cart); //Used for filtering the products that are on the cart
	return (
		<div className="cart-container">
			<h1>Your Cart</h1>

			{/* Check and render the Empty Cart or Product Componen */}
			{Object.keys(cart).length == 0 ? (
				<EmptyCart />
			) : (
				storeProducts.map((product) => {
					if (idsInCart.includes(`${product.id}`)) {
						return (
							<Product
								key={product.id}
								productInfo={product}
								extended={false}
							/>
						);
					}
				})
			)}
		</div>
	);
}
