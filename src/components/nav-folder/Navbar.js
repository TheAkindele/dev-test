import React from 'react'
import './Navbar.scss'
import bell from '../../assets/bell-icon.png'
import email from '../../assets/email-icon.png'
import setting from '../../assets/setting-icon.png'
import man from '../../assets/man.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-box">
                <div className="search-box">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="nav-right">
                    <img src={bell} alt="bell-icon" className="nav-icon bell" />
                    <img src={email} alt="email-icon" className="nav-icon email" />
                    <img src={setting} alt="setting-icon" className="nav-icon setting" />
                    <img src={man} alt="setting-icon" className="nav-icon man" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
