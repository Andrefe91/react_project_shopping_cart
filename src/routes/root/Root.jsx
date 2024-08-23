import "./root.css";
import fetchStoreProducts from "../../scripts/getData";
import { Outlet, useLoaderData } from "react-router-dom";

//Components
import Navbar from "../../components/navbar/Navbar";

//Loader for this route - Loading the data from the API https://fakestoreapi.com/products
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
	const storeProducts = await fetchStoreProducts();
	return storeProducts
}

export default function Root() {
	const storeProducts = useLoaderData();

	console.log(storeProducts);

	return (
		<>
            <Navbar />
			<div className="main-container">
				<Outlet />
			</div>
		</>
	);
}
