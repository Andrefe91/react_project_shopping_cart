//Css
import "./productlist.css";
//Modules
import { PropTypes } from "prop-types";
//Components
import Product from "../product/Product";

function ProductsList({ storeProducts }) {

    return (
    <div className="products-container">
        {storeProducts.map( (product) => {
            return (
                <Product key={product.id} productInfo={product} extended={true} />
            )
        })}
    </div>
    )
}

ProductsList.propTypes = {
    storeProducts: PropTypes.arrayOf(PropTypes.object),
};

export default ProductsList;
