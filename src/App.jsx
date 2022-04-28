import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* AREAS */
import Services from './routes/Services';

/* ROUTES */
import MainPage from './routes/MainPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/services' element={<Services/>} />
        </Routes>
    );
}

export default App;
