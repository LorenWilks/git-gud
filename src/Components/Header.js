import React, { useContext } from "react";
import logoLight from "../image/gitgudlogoLight.png"
import logoDark from "../image/gitgudlogoDark.png"
import { ThemeContext } from "../Context/ThemeContext";

function Header() {

    const { isDarkMode } = useContext(ThemeContext)

    return (
        <div>
            <img src={isDarkMode ? logoDark : logoLight} alt="Git Gud Logo (Light)" id="main-header" />
            {/* <button onClick={() => toggleIsDarkMode(!isDarkMode)}></button> */}
        </div>
    )
}

export default Header