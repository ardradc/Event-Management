const Tiles = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="card-title">Users</h5>
            <p className="card-text">Total users: 20</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="card-title">Vendors</h5>
            <p className="card-text">Total vendors: 20</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="card-title">Services</h5>
            <p className="card-text">Total services: 20</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="card-title">Orders</h5>
            <p className="card-text">Total orders: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;