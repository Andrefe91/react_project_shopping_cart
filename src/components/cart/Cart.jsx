//Css
import "./cart.css";
//Modules
import { useContext } from "react";
import { Link } from "react-router-dom";
//Components
import Product from "../product/Product";
import EmptyCart from "../emptyCart/EmptyCart";
//Scripts
import cartTotal from "../../scripts/cartTotal";
//Context
import { rootContext } from "../../context/rootContext";

export default function Cart() {
	const { cart } = useContext(rootContext);
	const { storeProducts } = useContext(rootContext);

	const idsInCart = Object.keys(cart); //Used for filtering the products that are on the cart

	const cartCalculations = cartTotal(cart, storeProducts);

	return (
		<>
			<h1>Your Cart</h1>
			<div id="cart">
				<div className="cart-container">
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

				{Object.keys(cart).length != 0 && (
					<div className="cart-summary">
						<h2>Cart Summary</h2>
						<div className="summary">
							<div className="summary-items">
								<p>Items Sub-Total:</p>
								<p>Shipping:</p>
								<p>Total:</p>
							</div>
							<div className="summary-values">
								<p>${cartCalculations.totalCart}</p>
								<p>${cartCalculations.totalShipping}</p>
								<p>${cartCalculations.total}</p>
							</div>
						</div>
						<div className="checkout-button">
							<Link to={"checkout"}>
								<button>Checkout</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
