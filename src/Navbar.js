import React from "react";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-5 text-white" ><strong>Start Bootstrap</strong> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-1 text-white">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;