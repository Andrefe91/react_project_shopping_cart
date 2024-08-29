//Css
import "./root.css";
//Scripts
import fetchStoreProducts from "../../scripts/getData";
// Modules
import { Outlet, useLoaderData } from "react-router-dom";
import { useState } from "react";
//Components
import Navbar from "../../components/navbar/Navbar";
//Context
import { rootContext } from "../../context/rootContext";

//Loader for this route - Loading the data from the API https://fakestoreapi.com/products
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({request}) {
	const storeProducts = await fetchStoreProducts();
	const url = new URL(request.url);
	const search = url.searchParams.get("search")
	const category = url.pathname.split("/")[2]?.replace("_", " ");

	console.log("search", search);
	console.log("category", category);

	if (!storeProducts) {
		throw new Response("", {
			status: 500,
            statusText: "Error fetching products",
		})
	}

	if (search) {
		return storeProducts.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
	} else if (category) {
		return storeProducts.filter(product => product.category.toLowerCase() == (category.toLowerCase()));
	} else {
		return storeProducts
	}
}

export default function Root() {
	const storeProducts = useLoaderData();
	const [cart, setCart] = useState({});

	return (
		<rootContext.Provider value={{cart, setCart, storeProducts}}>
			<Navbar />
			<div className="main-container">
				<Outlet />
			</div>
		</rootContext.Provider>
	);
}


