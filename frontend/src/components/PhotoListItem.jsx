// components/PhotoListItem.jsx
import React from "react";
import PropTypes from "prop-types";

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
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
                <p className="location">{location}</p>
            </div>
        </div>
    );
};

PhotoListItem.propTypes = {
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
};

export default PhotoListItem;
