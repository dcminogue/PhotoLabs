import React from "react";
import TopicListItem from "./TopicListItem";
import PropTypes from "prop-types";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => (
    <div className="top-nav-bar__topic-list">
        {topics.map(topic => (
            <TopicListItem key={topic.id} title={topic.title} />
        ))}
    </div>
);

TopicList.propTypes = {
    topics: PropTypes.array.isRequired,
};

export default TopicList;
