import React, { Fragment } from 'react'

const detaildata = [
    {
        name: 'Rudraa',
        address: 'Shivpur'
    },
    {
        name:'vishal',
        address:'shikandarpur'
    }
]

function Contact() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {detaildata.map((d) => {
                        return (
                            <Fragment>
                                <div className="col-3">
                                    <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">{d.name}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">{d.address}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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