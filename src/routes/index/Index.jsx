//Css
import "./index.css"
//Modules
import { useContext } from "react";
//Components
import Product from "../../components/product/Product";
//Context
import { rootContext } from "../root/Root";

export default function Index() {
    const {cartQuantity, setCartQuantity} = useContext(rootContext);
    const { storeProducts } = useContext(rootContext);

    const addToCart = () => { setCartQuantity((cartQuantity) => cartQuantity + 1) }

    console.log(storeProducts);

    return (
        <div className="products-container">
            {storeProducts.map( (product) => {
                return (
                    <Product key={product.id} productInfo={product} addToCart={addToCart}/>
                )
            })}
        </div>
    )
}
