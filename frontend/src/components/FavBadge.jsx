import React from "react";
import FavIcon from "./FavIcon"; // Keep this import

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist }) => {
    return (
        <div className="fav-badge">
            <FavIcon displayAlert={!!isFavPhotoExist} />
        </div>
    );
};

export default FavBadge;
