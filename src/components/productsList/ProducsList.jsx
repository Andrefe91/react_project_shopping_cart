//Css
import "./productlist.css";
//Components
import Product from "../product/Product";

export default function ProductsList({ storeProducts }) {

    return (
    <div className="products-container">
        {storeProducts.map( (product) => {
            return (
                <Product key={product.id} productInfo={product} />
            )
        })}
    </div>
    )
}


