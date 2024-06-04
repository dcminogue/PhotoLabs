import React, { useState, useEffect } from "react";
import HomeRoute from "routes/HomeRoute";
import photosData from "mocks/photos"; // Import photos mock data
import topicsData from "mocks/topics"; // Import topics mock data

import { FavPhotosProvider } from "./globalstate/FavPhotosContext";

const App = () => {
    const [photos, setPhotos] = useState([]);
    const [topics, setTopics] = useState([]);
    const [favPhotos, setFavPhotos] = useState([]);

    useEffect(() => {
        // Simulate asynchronous fetching of photos data
        setTimeout(() => {
            setPhotos(photosData);
        }, 5);

        // Simulate asynchronous fetching of topics data
        setTimeout(() => {
            setTopics(topicsData);
        }, 5);
    }, []);

    const toggleFavPhoto = photo => {
        // Logic for toggling favorite photo
    };

    return (
        <FavPhotosProvider>
            <HomeRoute
                photos={photos}
                topics={topics}
                toggleFavPhoto={toggleFavPhoto}
                favPhotos={favPhotos}
            />
        </FavPhotosProvider>
    );
};

export default App;
