import React, { useState, useEffect } from 'react';
import '../css/header-effect.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

function HeaderEffect() {
    const [scroll, Setscroll] = useState(false);

    // Similaire à ComponentDidMount et componentDidUpdate

    useEffect(() => {
        window.addEventListener("scroll", () => {
            Setscroll(window.scrollY > 800);
        });

    }, []);

    return (
        <header role="banner" className={scroll ? "banner-scroll" : "banner"}>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/card">Card</Link>
                <Link to="/">Home</Link>
            </Router>
        </header>
    )
}



export default HeaderEffect