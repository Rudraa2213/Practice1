import axios from 'axios'
import React, { useEffect, useState } from 'react';
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
    return (
        <div className="container mt-5">
            <h1 className='text-center'>Axios Posts</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {statV.map((d) => {
                    return (
                        <div class="col">
                            <div class="card border-success mb-3 bg-success">
                                <div class="card-header bg-transparent text-white border-success">UserId: {d.userId}</div>
                                <div class="card-body text-success bg-light" style={{ height: '15rem' }}>
                                    <h6 class="card-title">Id: {d.id}</h6>
                                    <h5 class="card-title">Title: {d.title}</h5>
                                    <p class="card-text">Body: {d.body}</p>
                                    <Link to={'data/' + d.id}>Click Here</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Myaxios