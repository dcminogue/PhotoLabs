import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import PhotoListItem from "components/PhotoListItem";
import PhotoFavButton from "components/PhotoFavButton";
import { FavPhotosContext } from "../globalstate/FavPhotosContext";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ photo, closeModal, openModal }) => {
    const { favPhotos, toggleFavPhoto } = useContext(FavPhotosContext);

    const [currentPhoto, setCurrentPhoto] = useState(photo);

    useEffect(() => {
        setCurrentPhoto(photo);
    }, [photo]);

    useEffect(() => {
        console.log(
            "Current Photo Similar Photos:",
            currentPhoto.similar_photos
        );
    }, [currentPhoto]);

    if (!currentPhoto) return null;

    const {
        urls: { full },
        user: { name, profile },
        location,
        similar_photos = [],
    } = currentPhoto;

    const isInitiallyFav = favPhotos.some(
        favPhoto => favPhoto.id === currentPhoto.id
    );
    const [isFav, setIsFav] = useState(isInitiallyFav);

    useEffect(() => {
        setIsFav(isInitiallyFav);
    }, [isInitiallyFav]);

    const handleFavButtonClick = event => {
        event.stopPropagation();
        toggleFavPhoto(currentPhoto);
        setIsFav(!isFav);
    };

    const handleSimilarPhotoClick = similarPhoto => {
        setCurrentPhoto(similarPhoto);
        openModal(similarPhoto);
    };

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
                            onFavouriteChange={handleFavButtonClick}
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
