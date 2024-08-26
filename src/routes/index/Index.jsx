//Css
import "./index.css"
//Modules
import { useContext } from "react";
//Components
import ProductsList from "../../components/productsList/ProducsList";
//Context
import { rootContext } from "../../context/rootContext";

export default function Index() {
    const { storeProducts } = useContext(rootContext);

    return (
        <>
            <ProductsList storeProducts={storeProducts} />
        </>
    )
}
