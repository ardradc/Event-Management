import { OrdersIcon, ServicesIcon, UsersIcon, VendorsIcon } from '../Icon';

const Tiles = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="card-title"><UsersIcon/></h5>
            <p className="card-text">Users</p>
            <p className="card-text">20</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="card-title"><VendorsIcon/></h5>
            <p className="card-text">Vendors</p>
            <p className="card-text">20</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="card-title"><ServicesIcon/></h5>
            <p className="card-text">Services</p>
            <p className="card-text">20</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="card-title"><OrdersIcon/></h5>
            <p className="card-text">Orders</p>
            <p className="card-text">20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;