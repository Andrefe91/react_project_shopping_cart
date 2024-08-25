//Css
import "./root.css";
//Scripts
import fetchStoreProducts from "../../scripts/getData";
// Modules
import { Outlet, useLoaderData } from "react-router-dom";
import { useState, createContext } from "react";
//Components
import Navbar from "../../components/navbar/Navbar";

//Loader for this route - Loading the data from the API https://fakestoreapi.com/products
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
	const storeProducts = await fetchStoreProducts();
	return storeProducts
}

//Creating the context for this route
export const rootContext = createContext(null);

export default function Root() {
	const storeProducts = useLoaderData();
	const [cartQuantity, setCartQuantity] = useState(0);

	return (
		<rootContext.Provider value={{cartQuantity, setCartQuantity}}>
			<Navbar />
			<div className="main-container">
				<Outlet />
			</div>
		</rootContext.Provider>
	);
}


