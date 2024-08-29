//Css
import "./checkout.css";
//Modules
import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import EmptyCart from "../emptyCart/EmptyCart";
//Scripts
import cartTotal from "../../scripts/cartTotal";
//Context
import { rootContext } from "../../context/rootContext";

export async function action() {

    // [TODO] Simulate a delay to mimic a server request
    return redirect("completed");
}

export default function Checkout() {
	const { cart } = useContext(rootContext);
	const { storeProducts } = useContext(rootContext);
	const cartCalculations = cartTotal(cart, storeProducts);

	const idsInCart = Object.keys(cart); //Used for filtering the products that are on the cart

	return (
		<>
			<div className="checkout-container">
				<h2>Checkout</h2>
			</div>

			<div className="cost-summary">
				<h3>Total: ${cartCalculations["total"]}</h3>
				<p>(with Shipping)</p>
			</div>

			<div id="client-information">
				<div className="cart-resume">
					{Object.keys(cart).length == 0 ? (
						<EmptyCart />
					) : (
						storeProducts.map((product) => {
							if (idsInCart.includes(`${product.id}`)) {
								return (
									<p className = "product-title" key={product.id}>
										{product.title} - x{cart[product.id]}
									</p>
								);
							}
						})
					)}
				</div>

				<div className="form-container">
					<Form method="post" id="shipping-form">
						<p>
							<label htmlFor="name">Name:</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								placeholder="Sherlock Holmes"
							/>
						</p>

						<p>
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								placeholder="best.detective@example.com"
							/>
						</p>

						<p>
							<label htmlFor="address">Address:</label>
							<input
								type="text"
								id="address"
								name="address"
								required
								placeholder="221B Baker Street"
							/>
						</p>

						<p>
							<label htmlFor="phone">Phone:</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								required
								placeholder="+44 1234 567890"
							/>
						</p>

						<p>
							<button type="submit">Place Order</button>
						</p>
					</Form>
				</div>
			</div>
		</>
	);
}
