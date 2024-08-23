import "./root.css";

//Scripts
import fetchStoreProducts from "../../scripts/getData";

// Modules
import { Outlet, useLoaderData } from "react-router-dom";
import { useState } from "react";

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
	const [cartQuantity, setCartQuantity] = useState(0);

	//Here is more information about using Context in the Outlet https://reactrouter.com/en/main/hooks/use-outlet-context

	console.log(storeProducts);

	return (
		<>
            <Navbar cartQuantity={cartQuantity}/>
			<div className="main-container">
				<Outlet />
			</div>
		</>
	);
}
