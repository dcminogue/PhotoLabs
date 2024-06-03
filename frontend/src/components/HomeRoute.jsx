import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import PropTypes from "prop-types";

const HomeRoute = ({ photos, topics }) => (
    <div className="HomeRoute">
        <TopNavigationBar topics={topics} />
        <PhotoList photos={photos} />
    </div>
);

HomeRoute.propTypes = {
    photos: PropTypes.array.isRequired,
    topics: PropTypes.array.isRequired,
};

export default HomeRoute;
