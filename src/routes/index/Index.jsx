//Css
import "./index.css";
//Modules
import { useContext } from "react";
//Components
import ProductsList from "../../components/productsList/ProducsList";
import NullSearch from "../../components/nullSearch/NullSearch";
//Context
import { rootContext } from "../../context/rootContext";

export default function Index() {
	const { storeProducts } = useContext(rootContext);
    
	return (
		<>
			{storeProducts.length == 0 ? (
				<NullSearch />
			) : (
				<ProductsList storeProducts={storeProducts} />
			)}
		</>
	);
}
