import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Fragment>
            <div className='container-fluid mt-2'>
                <nav className="navbar-expand-lg navbar navbar-light" style={{ backgroundColor: 'aqua' }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bold text-primary p-3" to="/">Rudraa</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary fw-bold active" aria-current="page" to="homepage">HomePage</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary fw-bold " to="Contact">Contacts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary fw-bold " to="State">Hooks</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary fw-bold " to="Myax">Axios</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-secondary fw-bold " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </Link>
                                    <ul className="dropdown-menu bg-light p-2" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item bg-info rounded mt-1" to="Action">Action</Link></li>
                                        <li><Link className="dropdown-item bg-warning rounded mt-1" to="Anotheraction">Another action</Link></li>
                                        <li><Link className="dropdown-item text-white bg-dark rounded mt-1" to="Somethingelse">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled text-secondary " to="disabled" tabindex="-1" aria-disabled="true">Disabled</Link>
                                </li>
                            </ul>
                            <div className='d-flex justify-content-between'>
                                <button className='btn btn-outline-dark'> 
                                <Link className='text-decoration-none fw-bold text-white' to={'Signup'}>SignUp</Link>
                                </button>
                                &nbsp;&nbsp;&nbsp;
                                <button className="btn btn-outline-primary" type="submit">
                                    <Link className='text-decoration-none fw-bold text-dark' to={'Signin'}>SignIn</Link>
                                </button>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Header