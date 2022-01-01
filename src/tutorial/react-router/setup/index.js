import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home";
import Login from "./login";
const ReactRouterSetup = () => {
    return <Router>
        <Routes >
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />} />
        </Routes>
    </Router>
}

export default ReactRouterSetup;