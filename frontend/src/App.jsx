// App.jsx
import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

// Array of sample data
const photoListData = [
    {
        id: "1",
        location: {
            city: "Montreal",
            country: "Canada",
        },
        imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
        username: "Joe Example",
        profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    // You can add more objects as needed
];

const App = () => (
    <div className="App">
        {photoListData.map(data => (
            <PhotoListItem
                key={data.id} // Use the id as the key
                id={data.id}
                location={`${data.location.city}, ${data.location.country}`}
                imageSource={data.imageSource}
                username={data.username}
                profile={data.profile}
            />
        ))}
    </div>
);

export default App;
