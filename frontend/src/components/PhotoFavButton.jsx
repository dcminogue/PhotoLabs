import React from "react";
import PropTypes from "prop-types";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ onFavouriteChange, initialSelected }) => {
    return (
        <button
            className={`img-fav-btn ${initialSelected ? "selected" : ""}`}
            onClick={event => {
                event.stopPropagation();
                onFavouriteChange(event);
            }}
        >
            <FavIcon selected={initialSelected} />
        </button>
    );
};

PhotoFavButton.propTypes = {
    onFavouriteChange: PropTypes.func.isRequired,
    initialSelected: PropTypes.bool.isRequired,
};

export default PhotoFavButton;
