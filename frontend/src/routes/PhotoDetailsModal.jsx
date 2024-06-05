import React from "react";
import PropTypes from "prop-types";
import PhotoListItem from "components/PhotoListItem";
import PhotoFavButton from "components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
    photo,
    closeModal,
    toggleFavPhoto,
    favPhotos,
    openModal,
}) => {
    if (!photo) return null;

    const {
        urls: { full },
        user: { name, profile },
        location,
        similar_photos = [],
    } = photo;

    const isFav = favPhotos.some(favPhoto => favPhoto.id === photo.id);

    return (
        <div className="photo-details-modal">
            <div className="photo-details-modal__content">
                <button
                    className="photo-details-modal__close-button"
                    onClick={closeModal}
                >
                    <img src={closeSymbol} alt="close symbol" />
                </button>
                <div className="photo-details-modal__image-container">
                    <img
                        src={full}
                        alt={name}
                        className="photo-details-modal__image"
                    />
                    <div className="photo-details-modal__fav-button">
                        <PhotoFavButton
                            onFavouriteChange={() => toggleFavPhoto(photo)}
                            initialSelected={isFav}
                        />
                    </div>
                </div>
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
                <div className="photo-details-modal__similar-photos">
                    <p className="photo-details-modal__similar-photos-title">
                        Similar Photos
                    </p>
                    <div className="photo-details-modal__similar-photos-grid">
                        {Object.values(similar_photos).map(similarPhoto => (
                            <PhotoListItem
                                key={similarPhoto.id}
                                photo={similarPhoto}
                                toggleFavPhoto={toggleFavPhoto}
                                isFav={favPhotos.some(
                                    favPhoto => favPhoto.id === similarPhoto.id
                                )}
                                openModal={openModal}
                            />
                        ))}
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
        similar_photos: PropTypes.object.isRequired,
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
    toggleFavPhoto: PropTypes.func.isRequired,
    favPhotos: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;
