import React, { Fragment } from 'react';
import logo from '../Other/photographer.jpg';

function Homepage() {
    return (
        <Fragment>
            <div className="container">
                <div class="container shadow" style={{ height: "82vh",top:'3rem', background: `url(${logo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'blur(.15rem)', position: 'fixed' }}>
                </div>
                <div className='container text-center' style={{ position: 'relative', top: '35vh',left:'1vw' }}>
                    <h1 className='text-light text-center p-4' contentEditable='true'>Hello World</h1>
                    <h2 className='text-light text-center' contentEditable='true'>This is HomePage</h2>
                    <a className='btn btn-success text-light fs-5 text-decoration-none text-center' href={logo} download='true'>Download</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Homepage