import React, { Fragment } from 'react';
import logo from '../Other/photographer.jpg';
import '../Css/Mrp.css'
import pic1 from '../Other/2020_ducati_superleggera_v4.jpg'
import pic2 from '../Other/Young_lambs_sheep_tree_sheep_baby_7744x5184.jpg'
import pic3 from '../Other/Wallpaper_8K_0_7680x4320.jpg'
import pic4 from '../Other/grass_forest_autumn_trees_hdr_park_leaves_walk_road_colors_5544x3632.jpg'
function Homepage() {
    return (
        <Fragment>
            <div className="container" style={{ height: '92vh' }}>
                <div className="container shadow" style={{ height: "82vh", top: '3rem', background: `url(${logo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'blur(.15rem)', position: 'absolute' }}>
                </div>
                <div className='container text-center' style={{ position: 'relative', top: '35vh', left: '1vw' }}>
                    <h1 className='text-light text-center p-4' contentEditable='true'>Hello World</h1>
                    <h2 className='text-light text-center' contentEditable='true'>This is HomePage</h2>
                    <a className='btn btn-success text-light fs-5 text-decoration-none text-center' href={logo} download='true'>Download</a>
                </div>
            </div>
            {/*Next Page*/}

            <div className="container border" style={{ height: '110vh' }}>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={pic1} className="d-block w-100 imgp" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <a className='btn btn-success text-light fs-5 text-decoration-none text-center' href={pic1} download='true'>Download</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={pic2} className="d-block w-100 imgp" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <a className='btn btn-success text-light fs-5 text-decoration-none text-center' href={pic2} download='true'>Download</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={pic3} className="d-block w-100 imgp" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <a className='btn btn-success text-light fs-5 text-decoration-none text-center' href={pic3} download='true'>Download</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={pic4} className="d-block w-100 imgp" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <a className='btn btn-success text-light fs-5 text-decoration-none text-center' href={pic4} download='true'>Download</a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Homepage