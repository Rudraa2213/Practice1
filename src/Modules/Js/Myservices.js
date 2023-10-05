import React, { Fragment } from 'react'
import Sidenavmobile from './ExtraPage/Sidenavmobile'
import { Outlet } from 'react-router-dom'

function Myservices() {
    return (<Fragment>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <Sidenavmobile></Sidenavmobile>
                </div>
                <div className="col-10">
                    <h1 className='text-center p-3'><u>Content Page</u></h1>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default Myservices