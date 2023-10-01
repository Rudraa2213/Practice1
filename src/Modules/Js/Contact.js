import React, { Fragment, useState } from 'react'
import mydata from './Mydetal';



function Contact() {
    
    const [sv,sf]=useState('https://4kwallpapers.com/images/walls/thumbs_3t/13012');
    return (
        <Fragment>
            <div className='container text-center bg-warning mt-2 rounded' style={{ height: '10vh' }}>
                <h1 className='lh-base text-white'> All Data</h1>
            </div>
            <div className="container border border-3 p-5 mt-1">
                <div className="row">
                    {mydata.map((d) => {
                        return (
                            <Fragment>
                                <div className="col-4 p-4" style={{boxSizing:'border-box'}}>
                                    <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">Name: {d.name}</div>
                                        <div className="card-body">
                                            <img src={sv+".jpeg"} alt="nothing to show" width={'250vw'} />
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