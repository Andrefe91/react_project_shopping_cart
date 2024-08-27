import "./product.css";
//Modules
import { PropTypes } from "prop-types";
import { useContext, useState } from "react";
//Components
import CategoryLink from "../categoryLink/CategoryLink";
//Context
import { rootContext } from "../../context/rootContext";

function Product({ productInfo }) {
	const { cart, setCart } = useContext(rootContext);
	const [productQuantity, setProductQuantity] = useState(1);

	function addToCart(productInfo) {
		setCart([...cart, productInfo.id]);
	}

	function addProductQuantity(event) {
		setProductQuantity(Number(event.target.value));
	}

	return (
		<div className="product-container">
			<div className="product-image">
				<img src={productInfo.image} alt={productInfo.title} />
			</div>

			<div className="product-information">
				<CategoryLink category={productInfo.category} />
				<h3>{productInfo.title}</h3>
				<p>
					{[
						productInfo.description[0].toUpperCase(),
						productInfo.description.slice(1),
					]}
				</p>
				<div className="free-shipping">
					<p className="product-price">Price: ${productInfo.price}</p>
					<p>
						{productInfo.price > 100 && "- FREE Shipping on qualifying order"}
					</p>
				</div>

				<input
					type="number"
					name={"item" + productInfo.id + "-quantity"}
					id={"item" + productInfo.id + "-quantity"}
					value={productQuantity}
					min="1"
					max="10"
					onChange={addProductQuantity}
					className="product-quantity"
				/>

				<button onClick={() => addToCart(productInfo)} className="addToCart">
					Add to Cart
				</button>
			</div>
		</div>
	);
}

Product.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	addToCart: PropTypes.func,
	productInfo: PropTypes.object,
};

export default Product;
