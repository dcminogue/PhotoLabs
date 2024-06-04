import React from "react";
import PhotoListItem from "./PhotoListItem";
import PropTypes from "prop-types";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavPhoto, favPhotos, onPhotoClick }) => (
    <ul className="photo-list">
        {photos.map(photo => (
            <PhotoListItem
                key={photo.id}
                photo={photo}
                toggleFavPhoto={toggleFavPhoto}
                favPhotos={favPhotos}
                onPhotoClick={onPhotoClick}
            />
        ))}
    </ul>
);

PhotoList.propTypes = {
    photos: PropTypes.array.isRequired,
    toggleFavPhoto: PropTypes.func.isRequired,
    favPhotos: PropTypes.array.isRequired,
    onPhotoClick: PropTypes.func.isRequired,
};

export default PhotoList;
