

import { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handelScroll = () => {
            const scrollLimit = window.innerHeight * 0.1;

            if (window.scrollY > scrollLimit)  {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll)
    }, [])

    return (
        <>
            <nav className={scrolled ? "scrolled" : ""}>
                <div className="container">
                    <div className="logo">
                        <p>N</p>
                        <h3>Nancy</h3>
                    </div>
                    <div className="btns">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Skills</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
