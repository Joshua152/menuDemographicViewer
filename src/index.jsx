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
import Home from './pages/Home';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path='/demographic' element={<Demographic />} />
            <Route path='/connections' element={<Connections />} />
            <Route path='/definitions' element={<Definitions />} />
        </Routes>
    </BrowserRouter>, 
    rootElement
);

