import React, { useState } from "react";
import PropTypes from "prop-types";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ onClick, initialSelected = false }) {
    const [selected, setSelected] = useState(initialSelected);

    const handleClick = () => {
        setSelected(prevSelected => !prevSelected);
        if (onClick) {
            onClick(!selected);
        }
    };

    return (
        <div className="photo-list__fav-icon" onClick={handleClick}>
            <div className="photo-list__fav-icon-svg">
                <FavIcon selected={selected} />
            </div>
        </div>
    );
}

PhotoFavButton.propTypes = {
    onClick: PropTypes.func,
    initialSelected: PropTypes.bool,
};

export default PhotoFavButton;
