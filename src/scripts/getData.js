import { setCache , getCache } from "./cache";

//This fetches the information from the Store API
// Given the fact that this is an exercise and there are not many items,


//API Endpoint for the
export default async function fetchStoreProducts() {
    try {
        const cache = await getCache();
        if (cache) {
            console.log("Using cached items");
            return cache;
        }

        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();
        await setCache( products );
        return products;
    } catch (error) {
        console.error(`Error fetching items: ${error.message}`);
        throw error;
    }
}
