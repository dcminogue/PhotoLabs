// components/PhotoListItem.jsx
import React from "react";
import PropTypes from "prop-types";

const PhotoListItem = ({ photo }) => {
    const { id, location, imageSource, username, profile } = photo;

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
        id: PropTypes.string.isRequired,
        location: PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
        }).isRequired,
        imageSource: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        profile: PropTypes.string.isRequired,
    }).isRequired,
};

export default PhotoListItem;
