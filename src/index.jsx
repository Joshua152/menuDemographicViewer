import React from 'react';
import { render } from 'react-dom';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import App from './pages/App';
import Connections from './pages/Connections';
import Definitions from './pages/Definitions';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/connections' element={<Connections />} />
            <Route path='/definitions' element={<Definitions />} />
        </Routes>
    </BrowserRouter>, 
    rootElement
);

