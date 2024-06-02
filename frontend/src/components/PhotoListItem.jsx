import React from "react";
import PropTypes from "prop-types";
import PhotoFavButton from "./PhotoFavButton"; // Import PhotoFavButton
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
    const {
        id = "N/A",
        location: { city = "Unknown City", country = "Unknown Country" } = {},
        urls: { regular: imageSource = "default-image.jpg" } = {},
        user: { name = "Unknown User", profile = "default-profile.jpg" } = {},
    } = photo;

    return (
        <div className="photo-list__item">
            <div className="photo-list_image_block">
                <PhotoFavButton />
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
        id: PropTypes.string,
        location: PropTypes.shape({
            city: PropTypes.string,
            country: PropTypes.string,
        }),
        urls: PropTypes.shape({
            regular: PropTypes.string,
        }),
        user: PropTypes.shape({
            username: PropTypes.string,
            profile: PropTypes.string,
        }),
    }).isRequired,
};

export default PhotoListItem;
