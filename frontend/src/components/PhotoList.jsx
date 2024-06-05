import React from "react";
import PropTypes from "prop-types";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavPhoto, favPhotos, openModal }) => {
    return (
        <div className="photo-list">
            {photos.map(photo => (
                <PhotoListItem
                    key={photo.id}
                    photo={photo}
                    toggleFavPhoto={toggleFavPhoto}
                    isFav={favPhotos.some(favPhoto => favPhoto.id === photo.id)}
                    openModal={openModal}
                />
            ))}
        </div>
    );
};

PhotoList.propTypes = {
    photos: PropTypes.array.isRequired,
    toggleFavPhoto: PropTypes.func.isRequired,
    favPhotos: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default PhotoList;
