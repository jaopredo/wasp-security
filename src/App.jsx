import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* AREAS */
import Services from './routes/Services';

/* ROUTES */
import MainPage from './routes/MainPage';

function App() {
    return (
        <Routes>
            <Route path='/wasp-security' element={<MainPage />} />
            <Route path='/wasp-security/services' element={<Services/>} />
        </Routes>
    );
}

export default App;
