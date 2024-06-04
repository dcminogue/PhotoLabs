import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FavIcon from "./FavIcon";

const PhotoFavButton = ({ initialSelected, onFavouriteChange }) => {
    const [isSelected, setIsSelected] = useState(initialSelected);

    useEffect(() => {
        setIsSelected(initialSelected);
    }, [initialSelected]);

    const handleClick = () => {
        setIsSelected(prevSelected => !prevSelected);
        onFavouriteChange(!isSelected);
    };

    return (
        <button
            className="img-fav-btn"
            onClick={handleClick}
            style={{ background: "none", border: "none", cursor: "pointer" }}
        >
            <FavIcon selected={isSelected} />
        </button>
    );
};

PhotoFavButton.propTypes = {
    initialSelected: PropTypes.bool.isRequired,
    onFavouriteChange: PropTypes.func.isRequired,
};

export default PhotoFavButton;
