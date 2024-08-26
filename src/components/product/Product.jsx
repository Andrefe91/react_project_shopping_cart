import "./product.css";
//Modules
import { PropTypes } from "prop-types";
import { useContext } from "react";
//Components
import CategoryLink from "../categoryLink/CategoryLink";
//Context
import { rootContext } from "../../routes/root/Root";


function Product({ productInfo }) {
    const { cart, setCart } = useContext(rootContext);

    function addToCart(productInfo) {
        console.log(cart);
        setCart([...cart, productInfo.id])
    }

    return (
        <div className="product-container">
            <div className="product-image">
                <img src={productInfo.image} alt={productInfo.title} />
            </div>
            <div className="product-information">
                <CategoryLink category={productInfo.category} />
                <h3>{productInfo.title}</h3>
                <p>{[productInfo.description[0].toUpperCase(), productInfo.description.slice(1)]}</p>
                <div className="free-shipping">
                    <p className="product-price">Price: ${productInfo.price}</p>
                    <p> {productInfo.price > 100 && "- FREE Shipping on qualifying order"}</p>
                </div>
                <button onClick={() => addToCart(productInfo)}>Add to Cart</button>
            </div>
        </div>
    )
}

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    addToCart: PropTypes.func,
    productInfo: PropTypes.object
}

export default Product
