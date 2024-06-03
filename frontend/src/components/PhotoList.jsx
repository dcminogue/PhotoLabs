import React from "react";
import PhotoListItem from "./PhotoListItem";
import PropTypes from "prop-types";

const PhotoList = ({ photos }) => (
    <ul className="photo-list">
        {photos.map(photo => (
            <PhotoListItem key={photo.id} photo={photo} />
        ))}
    </ul>
);

PhotoList.propTypes = {
    photos: PropTypes.array.isRequired,
};

export default PhotoList;
