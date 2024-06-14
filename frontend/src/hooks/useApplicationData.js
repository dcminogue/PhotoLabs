import { useReducer, useEffect } from "react";

// Define action types for the reducer
export const ACTIONS = {
    FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
    FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
    SET_PHOTO_DATA: "SET_PHOTO_DATA",
    SET_TOPIC_DATA: "SET_TOPIC_DATA",
    SELECT_PHOTO: "SELECT_PHOTO",
    DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
    CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
    SET_ERROR: "SET_ERROR",
    SET_CURRENT_TOPIC: "SET_CURRENT_TOPIC",
    SET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC",
};

// Reducer function to manage state transitions based on action types
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.FAV_PHOTO_ADDED:
            return {
                ...state,
                favPhotoIds: [...state.favPhotoIds, action.payload],
            };
        case ACTIONS.FAV_PHOTO_REMOVED:
            return {
                ...state,
                favPhotoIds: state.favPhotoIds.filter(
                    id => id !== action.payload
                ),
            };
        case ACTIONS.SET_PHOTO_DATA:
            return {
                ...state,
                photos: action.payload,
                error: null,
            };
        case ACTIONS.SET_TOPIC_DATA:
            return {
                ...state,
                topics: action.payload,
                error: null,
            };
        case ACTIONS.SELECT_PHOTO:
            return {
                ...state,
                selectedPhoto: action.payload,
            };
        case ACTIONS.CLOSE_PHOTO_DETAILS:
            return {
                ...state,
                selectedPhoto: null,
            };
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case ACTIONS.SET_CURRENT_TOPIC:
            return {
                ...state,
                currentTopic: action.payload,
            };
        case ACTIONS.SET_PHOTOS_BY_TOPIC:
            return {
                ...state,
                photos: action.payload,
                error: null,
            };
        default:
            throw new Error(
                `Tried to reduce with unsupported action type: ${action.type}`
            );
    }
}

// Helper function to fetch data and dispatch appropriate actions
const fetchData = async (url, actionType, dispatch) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch({ type: actionType, payload: data });
    } catch (error) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
    }
};

// Custom hook to manage application data
const useApplicationData = () => {
    // Initial state for the reducer
    const initialState = {
        photos: [],
        topics: [],
        favPhotoIds: [],
        selectedPhoto: null,
        error: null,
        currentTopic: null,
    };

    // useReducer hook to manage complex state logic
    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect to fetch initial photo data
    useEffect(() => {
        fetchData("/api/photos", ACTIONS.SET_PHOTO_DATA, dispatch);
    }, []);

    // useEffect to fetch initial topic data
    useEffect(() => {
        fetchData("/api/topics", ACTIONS.SET_TOPIC_DATA, dispatch);
    }, []);

    // Function to toggle a photo as favorite
    const toggleFavPhoto = photoId => {
        if (state.favPhotoIds.includes(photoId)) {
            dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
        } else {
            dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
        }
    };

    // Function to open the modal with selected photo
    const openModal = photo => {
        dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    };

    // Function to close the photo details modal
    const closeModal = () => {
        dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
    };

    // Function to fetch photos by topic
    const fetchPhotosByTopic = async topicId => {
        try {
            const response = await fetch(
                `http://localhost:8001/api/topics/photos/${topicId}`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: data });
        } catch (error) {
            dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
        }
    };

    // Function to set the current topic and fetch associated photos
    const setCurrentTopic = topicId => {
        dispatch({ type: ACTIONS.SET_CURRENT_TOPIC, payload: topicId });
        fetchPhotosByTopic(topicId);
    };

    return {
        state,
        updateToFavPhotoIds: toggleFavPhoto,
        onPhotoSelect: openModal,
        onClosePhotoDetailsModal: closeModal,
        setCurrentTopic,
    };
};

export default useApplicationData;
