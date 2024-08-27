//Css
import "./cart.css";
//Modules
import { useContext } from "react";
//Components
import CartProduct from "../cartProduct/CartProduct";
//Context
import { rootContext } from "../../context/rootContext";

export default function Cart() {
	const { cart, setCart } = useContext(rootContext);
	const { storeProducts } = useContext(rootContext);

	const idsInCart = Object.keys(cart);

	return (
		<div className="cart-container">
			{storeProducts.map((product) => {
				if (idsInCart.includes(`${product.id}`)) {
					return (
						<CartProduct
							productInfo={product}
							productQuantity={cart[product.id]}
							key={product.id}
						/>
					);
				}
			})}
		</div>
	);
}
