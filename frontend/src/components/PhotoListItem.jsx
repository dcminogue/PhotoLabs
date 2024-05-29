import React from "react";
import PropTypes from "prop-types";

const PhotoListItem = ({ photo }) => {
    const {
        id = "N/A",
        location = { city: "Unknown City", country: "Unknown Country" },
        imageSource = "default-image.jpg",
        username = "Unknown User",
        profile = "default-profile.jpg",
    } = photo;

    return (
        <div className="photo-list-item">
            <img
                src={imageSource}
                alt={`Photo ${id}`}
                className="photo-image"
            />
            <img
                src={profile}
                alt={`${username}'s profile`}
                className="profile-image"
            />
            <div className="photo-info">
                <h2 className="username">{username}</h2>
                <p className="location">
                    {location.city}, {location.country}
                </p>
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
        imageSource: PropTypes.string,
        username: PropTypes.string,
        profile: PropTypes.string,
    }).isRequired,
};

export default PhotoListItem;
