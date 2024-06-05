import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FavPhotosContext } from "../globalstate/FavPhotosContext";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, openModal }) => {
    const { favPhotos, toggleFavPhoto } = useContext(FavPhotosContext);
    const isInitiallyFav = favPhotos.some(favPhoto => favPhoto.id === photo.id);

    const [isFav, setIsFav] = useState(isInitiallyFav);

    useEffect(() => {
        setIsFav(isInitiallyFav);
    }, [isInitiallyFav]);

    const handleFavButtonClick = event => {
        event.stopPropagation(); // Prevent event bubbling
        toggleFavPhoto(photo);
    };

    if (!photo) {
        return (
            <div className="photo-list__item--error">Photo not available</div>
        );
    }

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
    photo: PropTypes.shape({
        id: PropTypes.string.isRequired,
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
    openModal: PropTypes.func.isRequired,
};

export default PhotoListItem;
