import { useState } from "react"
import searchIcon from "../assets/images/search_icon.svg"

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const career_labs_logo = import.meta.env.VITE_CAREER_LAB_LOGO_URL
    const isMobileView = screen.width <= 768

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
           <div className="web-header">
                <img src={career_labs_logo} alt="" className="logo-img" />
                
                {/* Navigation Menu */}
                <ul className={`heder-list ${isMenuOpen ? "open" : ""}`}>
                    <li onClick={() => setIsMenuOpen(false)}>{isMobileView ? 'Core Products': 'ABOUT US'}</li>
                    <li onClick={() => setIsMenuOpen(false)}>{ isMobileView? 'Single Suite Products': 'PRODUCTS'}</li>
                    <li onClick={() => setIsMenuOpen(false)}>{ isMobileView? 'Combo Suite Products': 'CONTACT US'}</li>
                    <li onClick={() => setIsMenuOpen(false)}>{ isMobileView ? 'Master Product': 'MANEE ASK'}</li>
                </ul>

                {/* Right Section - Search, Button, Hamburger */}
                <div className="nav-right">
                    <img src={searchIcon} alt="search" className="search-icon" />
                    <button className="btn-primary">GET INERNSHIP</button>
                    
                    {/* Hamburger Menu Button */}
                    <button className="hamburger" onClick={toggleMenu}>
                        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
                    </button>
                </div>
           </div>
        </>
        
    )
}