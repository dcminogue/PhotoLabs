import React from "react";
import PropTypes from "prop-types";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
    const {
        id = "N/A",
        location = { city: "Unknown City", country: "Unknown Country" },
        imageSource = "default-image.jpg",
        username = "Unknown User",
        profile = "default-profile.jpg",
    } = photo;

    return (
        <div className="photo-list__item">
            {" "}
            {/* Updated class name */}
            <img
                src={imageSource}
                alt={`Photo ${id}`}
                className="photo-list__image"
            />
            <div className="photo-list__user-container">
                <img
                    src={profile}
                    alt={`${username}'s profile`}
                    className="photo-list__user-profile"
                />
                <div className="photo-list__user-details">
                    <h2 className="photo-list__user-info">{username}</h2>
                    <p className="photo-list__user-location">
                        {location.city}, {location.country}
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
        imageSource: PropTypes.string,
        username: PropTypes.string,
        profile: PropTypes.string,
    }).isRequired,
};

export default PhotoListItem;
