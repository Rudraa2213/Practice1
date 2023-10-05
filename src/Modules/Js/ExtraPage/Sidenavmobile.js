import React, { Fragment } from 'react';
import '../../Css/Sidenav.css';
import { Link } from 'react-router-dom';
function Sidenavmobile() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                <div class="flex-shrink-0 p-3 bg-white">
                    <Link to="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                        <span class="fs-5 fw-semibold">Mobile Service</span>
                    </Link>
                    <ul class="list-unstyled ps-0">
                        <li class="mb-1">
                            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                Service
                            </button>
                            <div class="collapse show" id="home-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="repairmob" class="link-dark rounded">Repair</Link></li>
                                    <li><Link to="replacemob" class="link-dark rounded">Replace</Link></li>
                                    <li><Link to="buymob" class="link-dark rounded">Buy</Link></li>
                                    <li><Link to="err" class="link-dark rounded">Error</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                Dashboard
                            </button>
                            <div class="collapse" id="dashboard-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="#" class="link-dark rounded">Overview</Link></li>
                                    <li><Link to="#" class="link-dark rounded">Weekly</Link></li>
                                    <li><Link to="#" class="link-dark rounded">Monthly</Link></li>
                                    <li><Link to="#" class="link-dark rounded">Annually</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Orders
                            </button>
                            <div class="collapse" id="orders-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="#" class="link-dark rounded">New</Link></li>
                                    <li><Link to="#" class="link-dark rounded">Processed</Link></li>
                                    <li><Link to="#" class="link-dark rounded">Shipped</Link></li>
                                    <li><Link to="#" class="link-dark rounded">Returned</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="border-top my-3"></li>
                        <li class="mb-1">
                            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div class="collapse" id="account-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="#" class="link-dark rounded">New...</Link></li>
                                    <li><Link to="#" class="link-dark rounded">Profile</Link></li>
                                    <li><Link to="#" class="link-dark rounded">Settings</Link></li>
                                    <li><Link to="#" class="link-dark rounded">Sign out</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidenavmobile