//Css
import "./index.css"
//Modules
import { useContext } from "react";
//Components
import ProductsList from "../../components/productsList/ProducsList";
//Context
import { rootContext } from "../root/Root";

export default function Index() {
    const {cartQuantity, setCartQuantity} = useContext(rootContext);
    const { storeProducts } = useContext(rootContext);

    const addToCart = () => { setCartQuantity((cartQuantity) => cartQuantity + 1) }

    console.log(storeProducts);

    return (
        <>
            <ProductsList storeProducts={storeProducts} />
        </>
    )
}
