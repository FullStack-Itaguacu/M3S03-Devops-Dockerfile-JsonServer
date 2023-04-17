import React, { useEffect, createContext, useState, useContext } from "react";

export const ProductContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductContext);
    return context;
};

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5000/products")
            .then((res) => {
                return res.json();
            })
            .then((dados) => setProducts(dados));
            console.log(products);
    }, []);

    const value = { products };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};