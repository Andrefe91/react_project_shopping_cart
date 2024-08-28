//Css
import "./checkout.css"
//Modules
import { useContext } from "react";
//Scripts
import cartTotal from "../../scripts/cartTotal";
//Context
import { rootContext } from "../../context/rootContext";

export default function Checkout() {
    const { cart } = useContext(rootContext);
	const { storeProducts } = useContext(rootContext);
    const cartCalculations = cartTotal(cart, storeProducts);

    console.log(cartCalculations);
    
    return (
        <p>This is the Checkout Component</p>
    )
}
