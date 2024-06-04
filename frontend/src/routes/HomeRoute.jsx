import React from "react";
import PropTypes from "prop-types";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
    photos,
    topics,
    toggleFavPhoto,
    favPhotos,
    openModal,
}) => (
    <div className="HomeRoute">
        <TopNavigationBar topics={topics} favPhotos={favPhotos} />
        <PhotoList
            photos={photos}
            toggleFavPhoto={toggleFavPhoto}
            favPhotos={favPhotos}
            openModal={openModal}
        />
    </div>
);

HomeRoute.propTypes = {
    photos: PropTypes.array.isRequired,
    topics: PropTypes.array.isRequired,
    toggleFavPhoto: PropTypes.func.isRequired,
    favPhotos: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default HomeRoute;
