import React from 'react';
import { render } from 'react-dom';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Viewer from './pages/Viewer';
import Test from './pages/Test';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Viewer />} />
        </Routes>
    </BrowserRouter>, 
    rootElement
);

