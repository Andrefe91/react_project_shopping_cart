//Css
import "./index.css";
//Modules
import { useLoaderData } from "react-router-dom";
//Components
import ProductsList from "../../components/productsList/ProducsList";
import NullSearch from "../../components/nullSearch/NullSearch";
//Context

export default function Index() {
    const storeProducts = useLoaderData()

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
