import React from "react";
import PropTypes from "prop-types";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, onTopicSelect }) => (
    <button className="topic-list-item" onClick={() => onTopicSelect(id)}>
        {title}
    </button>
);

TopicListItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onTopicSelect: PropTypes.func.isRequired,
};

export default TopicListItem;
