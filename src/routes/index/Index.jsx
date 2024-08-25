//Css
import "./index.css"

//Modules
import { useOutletContext } from "react-router-dom"


export default function Index() {
    const [cartQuantity, setCartQuantity] = useOutletContext();

    const increaseCartQuantity = () => { setCartQuantity((cartQuantity) => cartQuantity + 1) }

    return (
        <>
            <p>This is the <b>Home</b> Page</p>
            <p>This is the Cart Quantity {cartQuantity}</p>
            <button onClick={increaseCartQuantity}>Increase by One</button>
        </>
    )
}
