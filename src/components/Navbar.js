import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <Link className="navbar-brand" to="/">Bad Bank</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/createaccount">Create Account</Link>
                    <Link className="nav-item nav-link" to="/deposit">Deposit</Link>
                    <Link className="nav-item nav-link" to="/withdraw">Withdraw</Link>
                    <Link className="nav-item nav-link" to="/alldata">All Data</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar