import React, { useContext, useEffect, useState } from "react";
import { FavPhotosContext } from "../globalstate/FavPhotosContext";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ topics, onTopicSelect }) => {
    const { favPhotos } = useContext(FavPhotosContext);
    const [notification, setNotification] = useState(false);

    useEffect(() => {
        // Effect to set notification when favPhotos array length > 0
        if (favPhotos.length > 0) {
            setNotification(true); // Display notification
            // Set timeout to clear notification after 1 second
            const timer = setTimeout(() => setNotification(false), 1000);
            return () => clearTimeout(timer); // Cleanup timer
        }
    }, [favPhotos]);

    return (
        <div className="top-nav-bar">
            <span className="top-nav-bar__logo">PhotoLabs</span> {/* Logo */}
            <TopicList topics={topics} onTopicSelect={onTopicSelect} />{" "}
            {/* Render TopicList component */}
            <FavBadge
                isFavPhotoExist={favPhotos.length > 0} // Check if favPhotos exist
                notification={notification || favPhotos.length > 0} // Set notification state
            />
        </div>
    );
};

export default TopNavigationBar;
