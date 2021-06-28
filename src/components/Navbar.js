import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip">Home</Tooltip>}>
                <Link className="navbar-brand" to="/">Bad Bank</Link>
            </OverlayTrigger>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="button-tooltip">Create an account</Tooltip>}>
                        <Link className="nav-item nav-link" to="/createaccount">Create Account</Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="button-tooltip">Make a deposit</Tooltip>}>
                        <Link className="nav-item nav-link" to="/deposit">Deposit</Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="button-tooltip">Withdraw money</Tooltip>}>
                        <Link className="nav-item nav-link" to="/withdraw">Withdraw</Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="button-tooltip">View all user data</Tooltip>}>
                        <Link className="nav-item nav-link" to="/alldata">All Data</Link>
                    </OverlayTrigger>
                </div>
            </div>
        </nav>
    )
}

export default NavBar