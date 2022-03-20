import React, { useState } from 'react';

/* AREAS */
import Header from './areas/Header';
import Main from './areas/Main';
import Footer from './areas/Footer';

function App() {
    const [titleProgress, setTitleProgress] = useState(0);
    return (
        <>
            <Header titleProgress={titleProgress} />
            <Main setProgress={setTitleProgress} />
            <Footer />
        </>
    );
}

export default App;
