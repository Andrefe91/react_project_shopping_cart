//Css
import "./index.css"
//Modules
import { useContext } from "react";
//Context
import { rootContext } from "../root/Root";

export default function Index() {
    const {cartQuantity, setCartQuantity} = useContext(rootContext);

    const increaseCartQuantity = () => { setCartQuantity((cartQuantity) => cartQuantity + 1) }

    return (
        <>
            <p>This is the <b>Home</b> Page</p>
            <p>This is the Cart Quantity {cartQuantity}</p>
            <button onClick={increaseCartQuantity}>Increase by One</button>
        </>
    )
}
