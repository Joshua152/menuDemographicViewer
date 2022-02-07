import React from 'react';
import { render } from 'react-dom';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import App from './pages/App';
import Info from './pages/Info';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/info' element={<Info />} />
        </Routes>
    </BrowserRouter>, 
    rootElement
);

