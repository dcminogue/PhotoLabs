import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { FavPhotosProvider } from "globalstate/FavPhotosContext";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
    // Destructure state and action functions from the custom hook
    const {
        state: { photos, topics, favPhotoIds, selectedPhoto },
        onPhotoSelect,
        updateToFavPhotoIds,
        onClosePhotoDetailsModal,
        setCurrentTopic,
    } = useApplicationData();

    return (
        <FavPhotosProvider>
            {/* Render the HomeRoute component with necessary props */}
            <HomeRoute
                photos={photos}
                topics={topics}
                toggleFavPhoto={updateToFavPhotoIds}
                favPhotos={photos.filter(photo =>
                    favPhotoIds.includes(photo.id)
                )}
                openModal={onPhotoSelect}
                onTopicSelect={setCurrentTopic}
            />
            {/* Conditionally render the PhotoDetailsModal if a photo is selected */}
            {selectedPhoto && (
                <PhotoDetailsModal
                    photo={selectedPhoto}
                    closeModal={onClosePhotoDetailsModal}
                    openModal={onPhotoSelect}
                />
            )}
        </FavPhotosProvider>
    );
};

export default App;
