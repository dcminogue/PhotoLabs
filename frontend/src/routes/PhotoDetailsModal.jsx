import React from "react";
import PropTypes from "prop-types";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ photo, closeModal }) => {
    if (!photo) return null;

    const {
        urls: { full },
        user: { name, profile },
        location,
    } = photo;

    return (
        <div className="photo-details-modal">
            <div className="photo-details-modal__content">
                <button
                    className="photo-details-modal__close-button"
                    onClick={closeModal}
                >
                    <img src={closeSymbol} alt="close symbol" />
                </button>
                <img
                    src={full}
                    alt={name}
                    className="photo-details-modal__image"
                />
                <div className="photo-details-modal__info">
                    <img
                        src={profile}
                        alt={`${name}'s profile`}
                        className="photo-details-modal__profile-image"
                    />
                    <div className="photo-details-modal__text-info">
                        <p className="photo-details-modal__user-name">{name}</p>
                        <p className="photo-details-modal__location">
                            {location.city}, {location.country}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

PhotoDetailsModal.propTypes = {
    photo: PropTypes.shape({
        urls: PropTypes.shape({
            full: PropTypes.string.isRequired,
        }).isRequired,
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile: PropTypes.string.isRequired,
        }).isRequired,
        location: PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;
