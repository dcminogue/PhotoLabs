import React from "react";
import PropTypes from "prop-types";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicSelect }) => (
    <div className="top-nav-bar__topic-list">
        {/* Map through each topic and render a TopicListItem component */}
        {topics.map(topic => (
            <TopicListItem
                key={topic.id} // Use topic id as the key (assuming it's unique)
                id={topic.id} // Pass the topic id as a prop
                title={topic.title} // Pass the topic title as a prop
                onTopicSelect={onTopicSelect} // Pass the onTopicSelect function
            />
        ))}
    </div>
);

TopicList.propTypes = {
    topics: PropTypes.array.isRequired, // Array of topics to display
    onTopicSelect: PropTypes.func.isRequired, // Function to handle topic selection
};

export default TopicList;
