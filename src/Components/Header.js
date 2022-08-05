import React, { useContext } from "react";
import GitGUDBannerDark from "../image/GitGUDBannerDark.gif"
import GitGUDBannerLight from "../image/GitGUDBannerLight.gif"
import { ThemeContext } from "../Context/ThemeContext";

function Header() {

    const { isDarkMode } = useContext(ThemeContext)

    return (
        <div>
            <img 
                src={isDarkMode ? GitGUDBannerDark : GitGUDBannerLight} 
                alt="Git Gud Logo (Light)" 
                id="main-header" />
            {/* <button onClick={() => toggleIsDarkMode(!isDarkMode)}></button> */}
        </div>
    )
}

export default Header