import React from "react";
import HomeRoute from "./components/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

import "./App.scss";

const App = () => (
    <div className="App">
        <HomeRoute photos={photos} topics={topics} />
    </div>
);

export default App;
