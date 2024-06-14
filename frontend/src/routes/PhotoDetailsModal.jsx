import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import PhotoListItem from "components/PhotoListItem";
import PhotoFavButton from "components/PhotoFavButton";
import { FavPhotosContext } from "../globalstate/FavPhotosContext";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ photo, closeModal, openModal }) => {
    // Get favorite photos context and actions
    const { favPhotos, toggleFavPhoto } = useContext(FavPhotosContext);

    // State to manage the current photo displayed in the modal
    const [currentPhoto, setCurrentPhoto] = useState(photo);

    // Update current photo when the provided photo prop changes
    useEffect(() => {
        setCurrentPhoto(photo);
    }, [photo]);

    // If no photo is selected, return null to prevent rendering
    if (!currentPhoto) return null;

    // Destructure necessary fields from the current photo object
    const {
        urls: { full },
        user: { name, profile },
        location,
        similar_photos = [],
    } = currentPhoto;

    // Determine if the current photo is initially a favorite
    const isInitiallyFav = favPhotos.some(
        favPhoto => favPhoto.id === currentPhoto.id
    );

    // State to manage the favorite status of the current photo
    const [isFav, setIsFav] = useState(isInitiallyFav);

    // Update favorite status state when initial favorite status changes
    useEffect(() => {
        setIsFav(isInitiallyFav);
    }, [isInitiallyFav]);

    // Handler for the favorite button click event
    const handleFavButtonClick = event => {
        event.stopPropagation();
        toggleFavPhoto(currentPhoto);
        setIsFav(!isFav);
    };

    // Handler for when a similar photo is clicked
    const handleSimilarPhotoClick = similarPhoto => {
        openModal(similarPhoto);
    };

    return (
        <div className="photo-details-modal">
            <div className="photo-details-modal__content">
                {/* Close button for the modal */}
                <button
                    className="photo-details-modal__close-button"
                    onClick={closeModal}
                >
                    <img src={closeSymbol} alt="close symbol" />
                </button>

                {/* Main image container */}
                <div className="photo-details-modal__image-container">
                    <img
                        src={full}
                        alt={name}
                        className="photo-details-modal__image"
                    />
                    <div className="photo-details-modal__fav-button">
                        <PhotoFavButton
                            onFavouriteChange={handleFavButtonClick}
                            initialSelected={isFav}
                        />
                    </div>
                </div>

                {/* User information container */}
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

                {/* Similar photos section */}
                {similar_photos.length > 0 && (
                    <div className="photo-details-modal__similar-photos">
                        <p className="photo-details-modal__similar-photos-title">
                            Similar Photos
                        </p>
                        <div className="photo-details-modal__similar-photos-grid">
                            {similar_photos.map(similarPhoto => (
                                <PhotoListItem
                                    key={similarPhoto.id}
                                    photo={similarPhoto}
                                    openModal={() =>
                                        handleSimilarPhotoClick(similarPhoto)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                )}
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
        similar_photos: PropTypes.array,
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;
