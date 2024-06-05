import React, { useState, useEffect } from "react";
import HomeRoute from "routes/HomeRoute";
import photosData from "mocks/photos";
import topicsData from "mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import { FavPhotosProvider } from "./globalstate/FavPhotosContext";

const App = () => {
    const [photos, setPhotos] = useState([]);
    const [topics, setTopics] = useState([]);
    const [favPhotos, setFavPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        setPhotos(photosData);
        setTopics(topicsData);
    }, []);

    const toggleFavPhoto = photo => {
        setFavPhotos(prevFavPhotos =>
            prevFavPhotos.some(favPhoto => favPhoto.id === photo.id)
                ? prevFavPhotos.filter(favPhoto => favPhoto.id !== photo.id)
                : [...prevFavPhotos, photo]
        );
    };

    const openModal = photo => {
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
                openModal={openModal}
            />
            {selectedPhoto && (
                <PhotoDetailsModal
                    photo={selectedPhoto}
                    closeModal={closeModal}
                    toggleFavPhoto={toggleFavPhoto}
                    favPhotos={favPhotos}
                    openModal={openModal}
                />
            )}
        </FavPhotosProvider>
    );
};

export default App;
