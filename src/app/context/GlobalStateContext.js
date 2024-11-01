'use client';

import { createContext, useState, useContext, useEffect } from 'react';

import Cookies from 'js-cookie';

// This creates a context that will be to be used anyhere in the app in this case in the dashboad and users page

const GlobalStateContext = createContext();

// This component will wrap around other components that need to use the global state
// The children used here is basically any child component that needs to use the global state
export const GlobalStateProvider = ({ children }) => {
  // Create a favorites state to store the users favorites
  const [favorites, setFavorites] = useState([]);

  // This runs after the component is rendered
  // What happening here is we are getting the favorites from cookies and if there isnt any cookie we make it an epmty array and then set it to the state
  useEffect(() => {
    const storedFavorites = JSON.parse(Cookies.get('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  // This function adds a user to the fav state
  // Whats hapepeing here is we are getting gettings the fav from the state and added the user to it
  const addToFavorites = (user) => {
    const updatedFavorites = [...favorites, user];
    // then set it
    setFavorites(updatedFavorites);
    // converts the updatedFav to a string and sets the cookie exp and saves it a cookie names favorites
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
