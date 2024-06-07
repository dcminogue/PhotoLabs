import React, { useContext } from "react";
import { FavPhotosContext } from "../globalstate/FavPhotosContext";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ topics, onTopicSelect }) => {
    const { favPhotos } = useContext(FavPhotosContext);

    return (
        <div className="top-nav-bar">
            <span className="top-nav-bar__logo">PhotoLabs</span>
            <TopicList topics={topics} onTopicSelect={onTopicSelect} />
            <FavBadge isFavPhotoExist={favPhotos.length > 0} />
        </div>
    );
};

export default TopNavigationBar;
