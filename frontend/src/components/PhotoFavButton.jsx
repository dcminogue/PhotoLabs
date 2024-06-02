import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ onFavouriteChange, initialSelected = false }) {
    const [selected, setSelected] = useState(initialSelected);

    const handleClick = () => {
        setSelected(prevSelected => !prevSelected);
    };

    useEffect(() => {
        onFavouriteChange(selected);
    }, [selected, onFavouriteChange]);

    return (
        <div className="photo-list__fav-icon" onClick={handleClick}>
            <div className="photo-list__fav-icon-svg">
                <FavIcon selected={selected} />
            </div>
        </div>
    );
}

PhotoFavButton.defaultProps = {
    onFavouriteChange: () => {},
};

PhotoFavButton.propTypes = {
    onFavouriteChange: PropTypes.func,
    initialSelected: PropTypes.bool,
};

export default PhotoFavButton;
