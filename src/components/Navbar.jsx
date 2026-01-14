

import { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handelScroll = () => {
            const scrollLimit = window.innerHeight * 0.1;

            if (window.scrollY > scrollLimit) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll)
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                })
            },
            {
                threshold: 0.6,
            }
        )
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
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
                        <a href="#home-section" className={activeSection === "home-section" ? "active" : ""}>Home</a>
                        <a href="#about-section" className={activeSection === "about-section" ? "active" : ""}>About</a>
                        <a href="#projects-section" className={activeSection === "projects-section" ? "active" : ""}>Projects</a>
                        <a href="#skills-section" className={activeSection === "skills-section" ? "active" : ""}>Skills</a>
                        <a href="#contact-section" className={activeSection === "contact-section" ? "active" : ""}>Contact</a>
                    </div>


                    {/* start menu */}
                    <div
                        className="menu-icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className="fa-solid fa-sliders"></i>
                    </div>
                    <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
                        <a href="#hero-section" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#aboutme-section" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#projects-section" onClick={() => setIsMenuOpen(false)}>Projects</a>
                        <a href="#skills-section" onClick={() => setIsMenuOpen(false)}>Skills</a>
                        <a href="#contact-section" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </div>
                    {/* end menu */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
