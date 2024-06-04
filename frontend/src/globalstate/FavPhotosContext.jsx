import React, { createContext, useState } from "react";

export const FavPhotosContext = createContext();

export const FavPhotosProvider = ({ children }) => {
    const [favPhotos, setFavPhotos] = useState([]);

    const toggleFavPhoto = photo => {
        setFavPhotos(prevFavPhotos => {
            if (prevFavPhotos.some(favPhoto => favPhoto.id === photo.id)) {
                return prevFavPhotos.filter(
                    favPhoto => favPhoto.id !== photo.id
                );
            } else {
                return [...prevFavPhotos, photo];
            }
        });
    };

    return (
        <FavPhotosContext.Provider value={{ favPhotos, toggleFavPhoto }}>
            {children}
        </FavPhotosContext.Provider>
    );
};
