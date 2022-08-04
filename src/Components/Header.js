import React, { useContext } from "react";
import logoLight from "../image/gitgudlogoLight.png"
import logoDark from "../image/gitgudlogoDark.png"
import GitGUDLight from "../image/GitGUDLight.png"
import GitGUDDark from "../image/GitGUDDark.png"
import { ThemeContext } from "../Context/ThemeContext";

function Header() {

    const { isDarkMode } = useContext(ThemeContext)

    return (
        <div>
            <img 
                src={isDarkMode ? GitGUDDark : GitGUDLight} 
                alt="Git Gud Logo (Light)" 
                id="main-header" />
            {/* <button onClick={() => toggleIsDarkMode(!isDarkMode)}></button> */}
        </div>
    )
}

export default Header