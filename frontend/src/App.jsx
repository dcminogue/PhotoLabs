import React from "react";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

import "./App.scss";
import { FavPhotosProvider } from "globalstate/FavPhotosContext";

const App = () => (
    <FavPhotosProvider>
        <div className="App">
            <HomeRoute photos={photos} topics={topics} />
        </div>
    </FavPhotosProvider>
);

export default App;
