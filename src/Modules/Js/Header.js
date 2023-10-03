import React, { Fragment } from 'react';
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
                {/* Body Start */}
                <div className="container-fluid" style={{ height: '85.5vh', backgroundImage: 'url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="row text-center pt-5">
                        <h1 className='text-dark bg-transparent fw-bold' style={{fontSize:'6rem'}}>Hello Rudraa</h1>
                        <p className='text-secondary fw-bold' style={{width:'30rem',marginLeft:'32vw'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi voluptate eos nemo, earum deserunt laudantium dolorem iure magnam soluta perferendis veniam quod placeat. Quia, aperiam! Veniam soluta debitis modi?
                        Vel asperiores totam, officiis molestias nostrum ad reiciendis, mollitia earum numquam cum fuga! Necessitatibus adipisci doloremque qui consequuntur rerum, quas rem sed ratione animi quo commodi fuga, maxime perferendis eius!
                        Architecto aut pariatur minus mollitia sint, tempora ratione molestias odit labore! Unde quos quasi quia placeat facilis, ut ex facere debitis molestiae incidunt omnis eius quod dolorem consequatur porro quis.
                        Tenetur nemo deleniti voluptatibus? Minus, voluptas cum voluptate aperiam nesciunt ipsa provident nisi deserunt reiciendis fugit quo modi eaque corrupti! Dolorum corrupti aliquam porro rerum vitae similique nemo non doloremque?</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
