import React, { Fragment } from 'react'

function Userdata() {
    const usersdata = JSON.parse(localStorage.getItem('userdatas'))

    return (
        <Fragment>
            <div className="container p-2" style={{border:'.1rem dotted black',minHeight:'50vh'}}>
                <div className="row">
                        {usersdata.map((d) => {
                            return (
                                <div className="col-4">
                                <div class="card text-white bg-primary mb-3">
                                    <div class="card-header">{d.Name}</div>
                                    <div class="card-body">
                                        <h6 class="card-title">Mobile: {d.Mobile}</h6>
                                        <h6 class="card-title">Password: {d.Password}</h6>
                                        <p class="card-text">Email Address: {d.Email}</p>
                                        <p class="card-text">Message: {d.Message}</p>
                                    </div>
                                    <div className="card-footer">
                                        {d.Message}
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