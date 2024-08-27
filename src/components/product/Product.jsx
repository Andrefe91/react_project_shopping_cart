import "./product.css";
//Modules
import { PropTypes } from "prop-types";
import { useContext, useState } from "react";
//Components
import CategoryLink from "../categoryLink/CategoryLink";
//Context
import { rootContext } from "../../context/rootContext";

function Product({ productInfo, extended }) {
	const { cart, setCart } = useContext(rootContext);
	const [productQuantity, setProductQuantity] = useState(
        cart[productInfo.id] ? cart[productInfo.id] : 1
    );

	function addToCart(productId, productQuantity) {
		setCart({...cart, [productId] : productQuantity});
	}

    function deleteFromCart(productId) {
		//As to not mutate the object, create a new one
        let objectCopy = { ...cart };
		//And then delete the product with productId
        delete objectCopy[productId];
        setCart(objectCopy);
    }

	function updateProductQuantity(event, productId) {
		setProductQuantity(Number(event.target.value));

		//Only update quantity if product is already in cart
		if (cart[productInfo.id]) {
			setCart({...cart, [productId]:(Number(event.target.value))});
		}
	}


	return (
		<div className={(extended ? "" : "cart-")+"product-container"}>
			<div className="product-image">
				<img src={productInfo.image} alt={productInfo.title} />
			</div>

			<div className="product-information">
				{/* Check if on Main Page to show category */}
				{extended && <CategoryLink category={productInfo.category} />}

				<h3>{productInfo.title}</h3>

				{extended &&
					<p>
						{[
							productInfo.description[0].toUpperCase(),
							productInfo.description.slice(1),
						]}
					</p>
				}

				<div className="free-shipping">
					<p className="product-price">{extended ? "":"Unit"} Price: ${productInfo.price}</p>
					{productInfo.price > 100 && <p>- Qualifies for FREE Shipping</p>}
				</div>

				<div className="cost-calculations">
					<p></p>
				</div>

				<div className="actions">
					<input
						type="number"
						name={"item" + productInfo.id + "-quantity"}
						id={"item" + productInfo.id + "-quantity"}
						value={ productQuantity }
						min="1"
						max="10"
						onChange={(e) => {updateProductQuantity(e, productInfo.id)}}
						className="product-quantity"
						// disabled={cart[productInfo.id]}
					/>

					{!cart[productInfo.id] &&
						<button onClick={() => addToCart(productInfo.id, productQuantity)} className="addToCart">
							Add to Cart
						</button>
					}

					{cart[productInfo.id] &&
						<button onClick={() => deleteFromCart(productInfo.id)} className="deleteFromCart">
							Remove from Cart
						</button>
					}
				</div>

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
	extended: PropTypes.bool,
};

export default Product;
