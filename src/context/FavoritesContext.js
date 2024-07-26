// src/context/FavoritesContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (product) => {
        setFavorites((prevFavorites) => [...prevFavorites, product]);
    };

    const removeFavorite = (productId) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((product) => product.id !== productId)
        );
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
