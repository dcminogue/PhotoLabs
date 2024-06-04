import React, { useState, useEffect } from "react";
import HomeRoute from "routes/HomeRoute";
import photosData from "mocks/photos"; // Import photos mock data
import topicsData from "mocks/topics"; // Import topics mock data
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import { FavPhotosProvider } from "./globalstate/FavPhotosContext";

const App = () => {
    const [photos, setPhotos] = useState([]);
    const [topics, setTopics] = useState([]);
    const [favPhotos, setFavPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null); // Add state for selected photo

    useEffect(() => {
        // Simulate asynchronous fetching of photos data
        setTimeout(() => {
            setPhotos(photosData);
        }, 1000);

        // Simulate asynchronous fetching of topics data
        setTimeout(() => {
            setTopics(topicsData);
        }, 1000);
    }, []);

    const toggleFavPhoto = photo => {};

    const handlePhotoClick = photo => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <FavPhotosProvider>
            <HomeRoute
                photos={photos}
                topics={topics}
                toggleFavPhoto={toggleFavPhoto}
                favPhotos={favPhotos}
                onPhotoClick={handlePhotoClick}
            />
            {selectedPhoto && (
                <PhotoDetailsModal
                    photo={selectedPhoto}
                    closeModal={closeModal}
                />
            )}
        </FavPhotosProvider>
    );
};

export default App;
