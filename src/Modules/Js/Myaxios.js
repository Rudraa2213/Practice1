import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Myaxios() {
    const [statV, statF] = useState([]);
    const axiosdata = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((d) => {
            statF(d.data);
        })
    }
    useEffect(() => {
        axiosdata();
    }, []);
    return (<Fragment>
            <div className='container mt-4' style={{width:'100vw',display:'flex'}}>
                <h1 className='text-white bg-secondary p-3 rounded' style={{Width:'20rem',marginLeft:'40%'}}>Axios Posts</h1>
                
            </div>
        <div className="container mt-5 bg-info">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {statV.map((d) => {
                    return (
                        <div class="col">
                            <div class="card border-success mb-3 bg-success">
                                <div class="card-header bg-transparent text-white border-success">UserId: {d.userId}</div>
                                <div class="card-body text-success bg-light" style={{ maxHeight: '18rem' }}>
                                    <h6 class="card-title">Id: {d.id}</h6>
                                    <h5 class="card-title">Title: {d.title}</h5>
                                    <p class="card-text">Body: {d.body}</p>
                                    <Link className='btn btn-outline-dark' to={'data/' + d.id}>Show Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
                </Fragment>
    )
}

export default Myaxios