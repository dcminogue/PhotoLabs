import React from "react";
import PropTypes from "prop-types";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, onTopicSelect }) => (
    <button className="topic-list-item" onClick={() => onTopicSelect(id)}>
        {title} {/* Display the title of the topic */}
    </button>
);

TopicListItem.propTypes = {
    id: PropTypes.number.isRequired, // Ensure id is a required number
    title: PropTypes.string.isRequired, // Ensure title is a required string
    onTopicSelect: PropTypes.func.isRequired, // Ensure onTopicSelect is a required function
};

export default TopicListItem;
