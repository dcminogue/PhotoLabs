import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { FavPhotosProvider } from "globalstate/FavPhotosContext";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
    const {
        state: { photos, topics, favPhotos, selectedPhoto },
        onPhotoSelect,
        updateToFavPhotoIds,
        onClosePhotoDetailsModal,
    } = useApplicationData();

    return (
        <FavPhotosProvider>
            <HomeRoute
                photos={photos}
                topics={topics}
                toggleFavPhoto={updateToFavPhotoIds}
                favPhotos={favPhotos}
                openModal={onPhotoSelect}
            />
            {selectedPhoto && (
                <PhotoDetailsModal
                    photo={selectedPhoto}
                    closeModal={onClosePhotoDetailsModal}
                    toggleFavPhoto={updateToFavPhotoIds}
                    favPhotos={favPhotos}
                    openModal={onPhotoSelect}
                />
            )}
        </FavPhotosProvider>
    );
};

export default App;
