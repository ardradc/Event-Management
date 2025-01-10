import { OrdersIcon, ServicesIcon, UsersIcon, VendorsIcon } from '../Icon';

const Tiles = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center bg-danger" style={{ color: 'white'}}>
            <h5 className="card-title"><UsersIcon width={36} height={36} /></h5>
            <p className="card-text h5">Users</p>
            <p className="card-text h1">20</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center bg-success" style={{ color: 'white'}}>
            <h5 className="card-title"><VendorsIcon width={36} height={36} /></h5>
            <p className="card-text h5">Vendors</p>
            <p className="card-text h1">20</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center bg-info" style={{ color: 'white'}}>
            <h5 className="card-title"><ServicesIcon width={36} height={36} /></h5>
            <p className="card-text h5">Services</p>
            <p className="card-text h1">20</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center bg-warning" style={{ color: 'white'}}>
            <h5 className="card-title"><OrdersIcon width={36} height={36} /></h5>
            <p className="card-text h5">Orders</p>
            <p className="card-text h1">20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;