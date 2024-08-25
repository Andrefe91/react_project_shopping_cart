//Css
import "./index.css"
//Modules
import { useContext } from "react";
//Context
import { rootContext } from "../root/Root";

export default function Index() {
    const {cartQuantity, setCartQuantity} = useContext(rootContext);
    const { storeProducts } = useContext(rootContext);

    const addToCart = () => { setCartQuantity((cartQuantity) => cartQuantity + 1) }

    return (
        <div className="products-container">
            
        </div>
    )
}
