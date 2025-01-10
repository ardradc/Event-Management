import { Link } from 'react-router';

let Logo = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <Link to={'/dashboard'} className="nav-link">
                    iServe
                </Link>
            </div>
        </nav>
    );
}

export default Logo;