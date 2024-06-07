import React from "react";
import TopicListItem from "./TopicListItem";
import PropTypes from "prop-types";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicSelect }) => (
    <div className="top-nav-bar__topic-list">
        {topics.map(topic => (
            <TopicListItem
                key={topic.id}
                id={topic.id}
                title={topic.title}
                onTopicSelect={onTopicSelect}
            />
        ))}
    </div>
);

TopicList.propTypes = {
    topics: PropTypes.array.isRequired,
    onTopicSelect: PropTypes.func.isRequired,
};

export default TopicList;
