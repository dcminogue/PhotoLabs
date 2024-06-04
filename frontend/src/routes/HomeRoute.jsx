import React from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PropTypes from "prop-types";

const HomeRoute = ({
    photos,
    topics,
    toggleFavPhoto,
    favPhotos,
    onPhotoClick,
}) => (
    <div className="HomeRoute">
        <TopNavigationBar topics={topics} favPhotos={favPhotos} />
        <PhotoList
            photos={photos}
            toggleFavPhoto={toggleFavPhoto}
            favPhotos={favPhotos}
            onPhotoClick={onPhotoClick}
        />
    </div>
);

HomeRoute.propTypes = {
    photos: PropTypes.array.isRequired,
    topics: PropTypes.array.isRequired,
    toggleFavPhoto: PropTypes.func.isRequired,
    favPhotos: PropTypes.array.isRequired,
    onPhotoClick: PropTypes.func.isRequired,
};

export default HomeRoute;
