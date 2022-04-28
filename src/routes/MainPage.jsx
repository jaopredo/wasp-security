import React, { useState } from 'react';

/* CSS */
import "../sass/Main.scss";

/* COMPONENTS */
import Header from '../areas/Header';
import Main from '../areas/Main';
import Footer from '../areas/Footer';

function MainPage() {
    const [titleProgress, setTitleProgress] = useState(0);

    return (
        <>
            <Header titleProgress={titleProgress} haveMenu />
            <Main
                setProgress={setTitleProgress}
            />
            <Footer />
        </>
    );
}

export default MainPage;