import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FavPhotosContext } from "../globalstate/FavPhotosContext";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, openModal }) => {
    // Access favorite photos context
    const { favPhotos, toggleFavPhoto } = useContext(FavPhotosContext);

    // Check if the current photo is a favorite
    const isInitiallyFav = favPhotos.some(favPhoto => favPhoto.id === photo.id);

    // State to track if the photo is a favorite
    const [isFav, setIsFav] = useState(isInitiallyFav);

    // Sync state with context updates
    useEffect(() => {
        setIsFav(isInitiallyFav);
    }, [isInitiallyFav]);

    // Handle favorite button click event
    const handleFavButtonClick = event => {
        event.stopPropagation();
        toggleFavPhoto(photo);
    };

    // Handle case when photo data is not available
    if (!photo) {
        return (
            <div className="photo-list__item--error">Photo not available</div>
        );
    }

    // Destructure photo data with default values
    const {
        id = "N/A",
        location: { city = "Unknown City", country = "Unknown Country" } = {},
        urls: { regular: imageSource = "default-image.jpg" } = {},
        user: { name = "Unknown User", profile = "default-profile.jpg" } = {},
    } = photo;

    return (
        <div className="photo-list__item" onClick={() => openModal(photo)}>
            <div className="photo-list_image_block">
                <PhotoFavButton
                    onFavouriteChange={handleFavButtonClick}
                    initialSelected={isFav}
                />
                <img
                    src={imageSource}
                    alt={`Photo ${id}`}
                    className="photo-list__image"
                />
            </div>

            <div className="photo-list__user-container">
                <img
                    src={profile}
                    alt={`${name}'s profile`}
                    className="photo-list__user-profile"
                />
                <div className="photo-list__user-details">
                    <h2 className="photo-list__user-info">{name}</h2>
                    <p className="photo-list__user-location">
                        {city}, {country}
                    </p>
                </div>
            </div>
        </div>
    );
};

PhotoListItem.propTypes = {
    // Define prop types for the photo object
    photo: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        location: PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
        }).isRequired,
        urls: PropTypes.shape({
            regular: PropTypes.string.isRequired,
        }).isRequired,
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    // Define prop type for the openModal function
    openModal: PropTypes.func.isRequired,
};

export default PhotoListItem;
