import React from "react";
import PropTypes from "prop-types";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavPhoto, favPhotos, openModal }) => {
    return (
        <div className="photo-list">
            {/* Map through each photo and render a PhotoListItem component */}
            {photos.map(photo => (
                <PhotoListItem
                    key={photo.id} // Use photo id as the key (assuming it's unique)
                    photo={photo} // Pass the photo object to PhotoListItem
                    toggleFavPhoto={toggleFavPhoto} // Pass toggleFavPhoto function
                    // Check if the current photo is a favorite based on favPhotos array
                    isFav={
                        favPhotos &&
                        favPhotos.some(favPhoto => favPhoto.id === photo.id)
                    }
                    openModal={openModal} // Pass openModal function
                />
            ))}
        </div>
    );
};

PhotoList.propTypes = {
    photos: PropTypes.array.isRequired, // Array of photos to display
    toggleFavPhoto: PropTypes.func.isRequired, // Function to toggle favorite status
    favPhotos: PropTypes.array.isRequired, // Array of favorite photos
    openModal: PropTypes.func.isRequired, // Function to open modal with photo details
};

export default PhotoList;
