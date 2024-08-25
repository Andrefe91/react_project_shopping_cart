import "./product.css";

export default function Product({ productInfo }) {

    return (
        <div className="product-container">
            <div className="product-image">
                <img src={productInfo.image} alt={productInfo.title} />
            </div>
            <div className="product-information">
                <h3>{productInfo.title}</h3>
                <p>{productInfo.description}</p>
                <p>Price: ${productInfo.price}</p>
                <button onClick={() => addToCart()}>Add to Cart</button>
            </div>
        </div>
    )
}
