import React, { createContext, useState } from "react";

// Create context for favorite photos
export const FavPhotosContext = createContext();

// Provider component for favorite photos context
export const FavPhotosProvider = ({ children }) => {
    // State to manage favorite photos
    const [favPhotos, setFavPhotos] = useState([]);

    // Function to toggle favorite status of a photo
    const toggleFavPhoto = photo => {
        setFavPhotos(prevFavPhotos => {
            // Check if the photo is already in favorites
            if (prevFavPhotos.some(favPhoto => favPhoto.id === photo.id)) {
                // Remove the photo from favorites
                return prevFavPhotos.filter(
                    favPhoto => favPhoto.id !== photo.id
                );
            } else {
                // Add the photo to favorites
                return [...prevFavPhotos, photo];
            }
        });
    };

    // Provide favPhotos array and toggleFavPhoto function to children components
    return (
        <FavPhotosContext.Provider value={{ favPhotos, toggleFavPhoto }}>
            {children} {/* Render children components */}
        </FavPhotosContext.Provider>
    );
};
