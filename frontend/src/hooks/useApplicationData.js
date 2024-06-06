import { useState, useEffect } from "react";
import photosData from "mocks/photos";
import topicsData from "mocks/topics";

const useApplicationData = () => {
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

    return {
        state: { photos, topics, favPhotos, selectedPhoto },
        updateToFavPhotoIds: toggleFavPhoto,
        onPhotoSelect: openModal,
        onClosePhotoDetailsModal: closeModal,
    };
};

export default useApplicationData;
