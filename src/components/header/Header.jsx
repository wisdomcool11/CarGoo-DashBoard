
import React from "react"

// importing Component
import ToggleBar from "./ToggleBar"

// nav bar
import NavBar from "./NavBar"
import Logo from "./Logo"
import MenuBar from "./MenuBar"

// navbutton
import NavButton from "./nav_button/NavButton"
import LogOut from "./nav_button/LogOut"
import UserView from "./nav_button/UserView"

// context
// const HeaderContext = React.createContext();

export default function Header (){

    const[toggle, setToggle] = React.useState(false)

    function handleToggle (){
        setToggle(prevToggle => !prevToggle)
    }

    return (
        <header className={`${toggle ? 'active' : null}`} data-aos="fade-down" data-aos-easing ="linear" data-aos-duration="1500">
            
            <NavBar>
                <Logo />
                {/* nav   */}
                <MenuBar />
            </NavBar>

            {/* nav_button */}
            <NavButton >
                <LogOut />
                <UserView />
            </NavButton>

            {/* toggle bar */}
            <ToggleBar handleToggle={handleToggle} />
        </header>
    )
}

