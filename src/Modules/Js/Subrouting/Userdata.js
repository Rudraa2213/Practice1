import React, { Fragment } from 'react'

function Userdata() {
    const usersdata = JSON.parse(localStorage.getItem('userdatas'))

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                        {usersdata.map((d) => {
                            return (
                                <div className="col-4">
                                <div class="card text-white bg-primary mb-3">
                                    <div class="card-header">{d.Name}</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Mobile: {d.Mobile}</h5>
                                        <h5 class="card-title">Password: {d.Password}</h5>
                                        <p class="card-text">Email Address: {d.Email}</p>
                                        <p class="card-text">Message: {d.Message}</p>
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

export default Userdata