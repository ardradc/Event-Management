import { Link } from 'react-router';

import logo from './assets/logo.svg'

let Logo = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <Link to={'/dashboard'} className="nav-link">
                    <img src={logo} alt="Bootstrap" width="30" height="24" />
                </Link>
            </div>
        </nav>
    );
}

export default Logo;