import React from "react";
import PropTypes from "prop-types";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, notification }) => {
    return (
        <div className={`fav-badge ${notification ? "fav-badge--active" : ""}`}>
            <FavIcon displayAlert={notification} selected={isFavPhotoExist} />
        </div>
    );
};

FavBadge.propTypes = {
    isFavPhotoExist: PropTypes.bool.isRequired,
    notification: PropTypes.bool.isRequired,
};

export default FavBadge;
