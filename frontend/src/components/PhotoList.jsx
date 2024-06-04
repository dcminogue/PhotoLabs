import React from "react";
import PhotoListItem from "./PhotoListItem";
import PropTypes from "prop-types";

const PhotoList = ({ photos, toggleFavPhoto, favPhotos }) => (
    <ul className="photo-list">
        {photos.map(photo => (
            <PhotoListItem
                key={photo.id}
                photo={photo}
                toggleFavPhoto={toggleFavPhoto}
                favPhotos={favPhotos}
            />
        ))}
    </ul>
);

PhotoList.propTypes = {
    photos: PropTypes.array.isRequired,
    toggleFavPhoto: PropTypes.func.isRequired,
    favPhotos: PropTypes.array.isRequired,
};

export default PhotoList;
