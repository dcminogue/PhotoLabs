import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = () => {
    return (
        <div className="HomeRoute">
            <TopNavigationBar />
            <PhotoList />
        </div>
    );
};

export default HomeRoute;
