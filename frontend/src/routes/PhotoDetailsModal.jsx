import React from "react";
import PropTypes from "prop-types";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ photo, closeModal }) => {
    return (
        <div className="photo-details-modal">
            <button
                className="photo-details-modal__close-button"
                onClick={closeModal}
            >
                <img src={closeSymbol} alt="close symbol" />
            </button>
        </div>
    );
};

PhotoDetailsModal.propTypes = {
    photo: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;
