import { Link } from 'react-router';

import Logo from './Logo';


let Sidebar = () => {
    return (
        <>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">
                            <Logo/>
                        </span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <Link to={'/dashboard'} className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/dashboard/users'} className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Users</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/dashboard/vendors'} className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Vendors</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/dashboard/services'} className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Services</span>
                            </Link>
                        </li>
                    </ul>
                    <hr/>
                    <div className="dropdown pb-4">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                            <span className="d-none d-sm-inline mx-1">Admin</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li>
                                <Link to={'/'} className="dropdown-item">
                                    Sign out
                                </Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Sidebar;