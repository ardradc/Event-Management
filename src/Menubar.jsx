import LogoutButton from './ConfirmLogout';
import Logo from './Logo';

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="container" style={{textAlign: 'center'}}>
          <div className='row'>
            <div className='col-2' title='FULLMOON Services'>
              <Logo/>
            </div>
          </div>
        </div>
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