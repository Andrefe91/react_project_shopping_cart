//Css
import "./cartproduct.css"
//Modules
import { PropTypes } from "prop-types";

function CartProduct({productInfo, productQuantity}) {
    

    return (
        <div className="cart-product-container">
            <div className="product-image">
				<img src={productInfo.image} alt={productInfo.title} />
			</div>
            <div className="product-info">
                <h3>{productInfo.title}</h3>
                <div className="cart-shipping">
                    <p>Price: ${productInfo.price}</p>
                    {productInfo.price > 100 && <p>Qualifies for FREE Shipping</p>}
                </div>
                <p>Quantity: {productQuantity}</p>
            </div>
        </div>
    )
}

CartProduct.propTypes = {
    productInfo: PropTypes.object,
    productQuantity: PropTypes.number
}


export default CartProduct;

