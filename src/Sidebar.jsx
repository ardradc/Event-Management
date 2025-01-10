import {Link} from 'react-router';
import { MenuIcon } from './Icon';

const Sidebar = () => {
    return (
      <div className="bg-dark text-white position-fixed" style={{ width: "250px", height: "100vh", marginTop: "56px" }}>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to={'/dashboard'} className="nav-link text-white">
                    <i className="fs-4 bi-house"><MenuIcon/></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/dashboard/services'} className="nav-link text-white">
                    <i className="fs-4 bi-house"><MenuIcon/></i> <span className="ms-1 d-none d-sm-inline">Services</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/dashboard/vendors'} className="nav-link text-white">
                    <i className="fs-4 bi-house"><MenuIcon/></i> <span className="ms-1 d-none d-sm-inline">Vendors</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/dashboard/users'} className="nav-link text-white">
                    <i className="fs-4 bi-house"><MenuIcon/></i><span className="ms-1 d-none d-sm-inline">Users</span>
                </Link>
            </li>
        </ul>
      </div>
    );
  };

export default Sidebar;