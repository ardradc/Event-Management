import {Link} from 'react-router';
import { LogoutIcon } from './Icon';

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          iSERVE
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">
                <i className="fs-4 bi-house"><LogoutIcon/></i><span className="ms-1 d-none d-sm-inline">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;