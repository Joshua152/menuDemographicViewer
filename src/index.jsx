import React from 'react';
import { render } from 'react-dom';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Demographic from './pages/Demographic';
import Connections from './pages/Connections';
import Definitions from './pages/Definitions';
import App from './pages/App';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<App/>} />
            <Route path='/demographic' element={<Demographic />} />
            <Route path='/connections' element={<Connections />} />
            <Route path='/definitions' element={<Definitions />} />
        </Routes>
    </BrowserRouter>, 
    rootElement
);

