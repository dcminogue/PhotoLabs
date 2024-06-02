import React, { useState } from "react";
import PropTypes from "prop-types";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
    photo: {
        id = "N/A",
        location: { city = "Unknown City", country = "Unknown Country" } = {},
        urls: { regular: imageSource = "default-image.jpg" } = {},
        user: { name = "Unknown User", profile = "default-profile.jpg" } = {},
    },
}) => {
    const [isFav, setIsFav] = useState(false);

    const handleFavButtonClick = isSelected => {
        setIsFav(isSelected);
        // Perform any additional action when the favorite button is clicked, e.g., update server, state management, etc.
        // Example: updateFavoriteStatus(id, isSelected);
    };

    return (
        <div className="photo-list__item">
            <div className="photo-list_image_block">
                <PhotoFavButton
                    onClick={handleFavButtonClick}
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
};

export default PhotoListItem;
