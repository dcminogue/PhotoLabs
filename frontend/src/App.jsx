import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { FavPhotosProvider } from "globalstate/FavPhotosContext";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
    const {
        state: { photos, topics, favPhotoIds, selectedPhoto },
        onPhotoSelect,
        updateToFavPhotoIds,
        onClosePhotoDetailsModal,
        setCurrentTopic,
    } = useApplicationData();

    const handlePhotoSelect = photo => {
        const similar_photos = photos
            .filter(p => p.id !== photo.id)
            .slice(0, 8);
        onPhotoSelect({ ...photo, similar_photos });
    };

    return (
        <FavPhotosProvider>
            <HomeRoute
                photos={photos}
                topics={topics}
                toggleFavPhoto={updateToFavPhotoIds}
                favPhotos={photos.filter(photo =>
                    favPhotoIds.includes(photo.id)
                )}
                openModal={handlePhotoSelect}
                onTopicSelect={setCurrentTopic}
            />
            {selectedPhoto && (
                <PhotoDetailsModal
                    photo={selectedPhoto}
                    closeModal={onClosePhotoDetailsModal}
                    openModal={handlePhotoSelect}
                />
            )}
        </FavPhotosProvider>
    );
};

export default App;
