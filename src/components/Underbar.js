import React from "react";
import '../styles/Underbar.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Layout from "./Layout";


const Underbar = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="one" element={<One />} />
                    <Route path="two" element={<Two />} />
                    <Route path="three" element={<Three />} />
                    <Route path="four" element={<Four />} />
                    <Route path="five" element={<Five />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
    
}

export default Underbar;