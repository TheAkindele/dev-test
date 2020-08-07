import React from 'react'
import './Sidebar.scss'
import logo from '../../assets/logo.png'
import dashboard from '../../assets/dashboard-icon.png'
import gigs from '../../assets/gigs-icon.png'
import company from '../../assets/company-icon.png'
import account from '../../assets/account-icon.png'

const SidebarNav = () => {
    return (
        <aside>
            <div className="logo-box">
                <img src={logo} alt="logo-icon" className='logo' />
            </div>
            <div className="sidebar-down">
                <div className="menu">
                    <img src={dashboard} alt="dashboard" className="icon" />
                    <div className="label">Dashboard</div>
                </div>
                <div className="menu">
                    <img src={gigs} alt="gigs" className="icon" />
                    <div className="label">Gigs</div>
                </div>
                <div className="menu">
                    <img src={company} alt="company" className="icon" />
                    <div className="label">Company</div>
                </div>
                <div className="menu">
                    <img src={account} alt="account" className="icon" />
                    <div className="label">Acount</div>
                </div>
            </div>
        </aside>
    )
}

export default SidebarNav
