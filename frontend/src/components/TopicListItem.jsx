import React from "react";
import PropTypes from "prop-types";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic }) => {
    return (
        <div className="topic-list__item">
            <span>{topic.title}</span>
        </div>
    );
};

TopicListItem.propTypes = {
    topic: PropTypes.shape({
        id: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default TopicListItem;
