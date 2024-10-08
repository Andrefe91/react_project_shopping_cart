import localforage from "localforage";

async function setCache(object) {
    try {
        await localforage.setItem("shoppingCache", object);
        console.log("Cache saved");
    } catch (error) {
        console.log(`There was an error saving the cache: ${error}`);
    }
}


async function getCache() {
    try {
        const cache = await localforage.getItem("shoppingCache");

        if (!cache) { //In the given case that the cache is empty
            console.log("Cache is empty");
            return null;
        }
        return cache
    } catch (error) {
        console.log(`There was an error getting the cache: ${error}`);
    }
}

export { setCache, getCache }
