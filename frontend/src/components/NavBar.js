import React from 'react'


import {

    Link
} from "react-router-dom";

const NavBar = () => {




    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark" style={{
                backgroundColor: "#670404",
                opacity: "0.9",
                position: "fixed",
                top: "0",
                width: "100%",
                zIndex: "1"
            }}>
                <div className="container-fluid">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/project">Our Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/works" >How We Work?</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <Link className="navbar-brand mx-auto" to="/">HATEater</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Our Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Support Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
