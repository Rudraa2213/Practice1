import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Myaxdetail() {
    const { id } = useParams();
    const [svariable, sfunction] = useState(axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((d) => {
        sfunction(d.data);
    }));
    return (
        <div className="container">
            <div className='row'>
                <div class="card text-white bg-dark mb-3" style={{ maxWidth: "28rem" }}>
                    <div class="card-header">Id: {svariable.id}</div>
                    <div class="card-header">UserId: {svariable.userId}</div>
                    <div class="card-body">
                        <h5 class="card-title">Title: {svariable.title}</h5>
                        <p class="card-text">Body Description {svariable.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Myaxdetail