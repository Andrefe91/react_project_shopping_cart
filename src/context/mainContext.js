import { useState, createContext } from "react";

const [cartQuantity, setCartQuantity] = useState(0);

export const mainContext = createContext([cartQuantity, setCartQuantity]);
