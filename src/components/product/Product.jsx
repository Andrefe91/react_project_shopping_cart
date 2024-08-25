import "./product.css";

export default function Product({ productInfo }) {

    return (
        <div className="product-container">
            <div className="product-image">
                <img src={productInfo.image} alt={productInfo.title} />
            </div>

        </div>
    )
}
