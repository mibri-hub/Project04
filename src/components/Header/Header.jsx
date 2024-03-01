import { useState } from 'react'
import React from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) 
    {
      return { right: !menuOpened && "-100%" }
    }
  }

  return (
    <div className="h-wrapper">
      
      <div className="flexCenter paddings innerWidth h-container">

        <OutsideClickHandler
          onOutsideClick={() => setMenuOpened(false)}
        >
          <div className="flexEnd h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <img className="logo" src="./images/logo.png" alt="" width={120} />

            <a href="#services">Szolgáltatásaink</a>
            <a href="#contact">Kapcsolat</a>
            <button className="button">
              <a href="tel:+362051355220">Hívj most!</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>

    </div>
  )
}

export default Header