import React, { Fragment, useState } from 'react'
import mydata from './Mydetal';


function Contact() {
    let a = (1);
    const [svar, sfun] = useState(1);
    const [sv, sf] = useState('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-' + a);
    const changeimg = () => {
        sfun(svar + a);
        sf(sv);
    }
    return (
        <Fragment>
            <div className='container text-center bg-warning mt-2 rounded' style={{ height: '10vh' }}>
                <h1 className='lh-base text-white'> All Data</h1>
            </div>
            <div className="container border border-3 p-5 mt-1">
                <div className="row">
                    <p className='btn btn-primary' onClick={changeimg}>Change Image</p><span><a className='btn btn-secondary' href={sv + svar + ".jpg"} download='true' target='__blank'>Downlaod</a></span>
                    {mydata.map((d) => {
                        return (
                            <Fragment>
                                <div className=" col-4 p-4" key={d.id} style={{ boxSizing: 'border-box' }}>
                                    <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">Name: {d.name}</div>
                                        <div className="card-body">
                                            <img src={sv + svar + ".jpg"} className='img-fluid' alt="nothing to show" width={'250vw'} />
                                            <p className='card-text'><a className='text-decoration-none text-white' rel='noreferrer' target='_blank' href={d.url}>{d.url}</a> </p>
                                            <h6 className="card-title">Tags: {d.tags}</h6>
                                            <p className="card-text">Description: {d.description}</p>
                                            <p className="card-text">Author: {d.author}</p>
                                            <p className="card-text">Stars: {d.stars}</p>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    )
}


export default Contact