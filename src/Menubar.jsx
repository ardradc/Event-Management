import LogoutButton from './ConfirmLogout';

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
              <LogoutButton/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;