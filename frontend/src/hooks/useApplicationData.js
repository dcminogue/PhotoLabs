import { useState } from "react";
import photosData from "mocks/photos";
import topicsData from "mocks/topics";

const useApplicationData = () => {
    const [photos] = useState(photosData);
    const [topics] = useState(topicsData);
    const [favPhotoIds, setFavPhotoIds] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const toggleFavPhoto = photoId => {
        setFavPhotoIds(prevFavPhotoIds =>
            prevFavPhotoIds.includes(photoId)
                ? prevFavPhotoIds.filter(id => id !== photoId)
                : [...prevFavPhotoIds, photoId]
        );
    };

    const openModal = photo => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
    };

    return {
        state: { photos, topics, favPhotoIds, selectedPhoto },
        updateToFavPhotoIds: toggleFavPhoto,
        onPhotoSelect: openModal,
        onClosePhotoDetailsModal: closeModal,
    };
};

export default useApplicationData;
