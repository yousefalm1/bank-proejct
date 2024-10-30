'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Only load favorites from cookies on the client
    const storedFavorites = JSON.parse(Cookies.get('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (user) => {
    const updatedFavorites = [...favorites, user];
    setFavorites(updatedFavorites);
    Cookies.set('favorites', JSON.stringify(updatedFavorites), { expires: 1 });
  };

  const removeFromFavorites = (user) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite._id !== user._id
    );
    setFavorites(updatedFavorites);
    Cookies.set('favorites', JSON.stringify(updatedFavorites), { expires: 1 });
  };

  const isFavorite = (user) => {
    return favorites.some((favorite) => favorite._id === user._id);
  };

  return (
    <GlobalStateContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
