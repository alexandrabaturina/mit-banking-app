import React from 'react'
import Navlink from './Navlink'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Navlink
                hover="Home"
                page="Bad Bank"
                link="/"
                navClass="navbar-brand" />
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Navlink
                        page="Create Account"
                        hover="Create an account"
                        link="/createaccount"
                        navClass="nav-item nav-link" />
                    <Navlink
                        page="Deposit"
                        hover="Deposit money"
                        link="/deposit"
                        navClass="nav-item nav-link" />
                    <Navlink
                        page="Withdraw"
                        hover="Withdraw money"
                        link="/withdraw"
                        navClass="nav-item nav-link" />
                    <Navlink
                        page="All Data"
                        hover="View all user data"
                        link="/alldata"
                        navClass="nav-item nav-link" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar