import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import {loadOrderDetails} from '../api';

const TITLE = 'Order details';

let OrderDetails = () => {
    let { id } = useParams();
    let [order, setOrder] = useState(null);

    useEffect(() => {
        loadOrderDetails(id, (data) => {
            setOrder(data[0]);
        },() => {
            setOrder(null);
        });
    }, [id]);

    return (
        <>
            <div className="container container-fluid">
            <div className="d-flex">
                    <h2>{TITLE}</h2>
                </div>
                <div className="d-flex">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/dashboard/orders'} className="nav-link">Orders</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{TITLE}</li>
                        </ol>
                    </nav>
                </div>
                <br/>
                <div className="d-flex">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="serviceName" className="form-label">Name</label>
                            <input type="text" className={`form-control ${order == null ? 'placeholder placeholder-wave' : null}`} id="serviceName" value={order?.name}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="upc" className="form-label">UPC</label>
                            <input type="text" className={`form-control ${order == null ? 'placeholder placeholder-wave' : null}`} id="upc" value={order?.upc}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="ean" className="form-label">EAN</label>
                            <input type="text" className={`form-control ${order == null ? 'placeholder placeholder-wave' : null}`} id="ean" value={order?.ean}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="text" className={`form-control ${order == null ? 'placeholder placeholder-wave' : null}`} id="price" value={order?.price}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="netPrice" className="form-label">Net price</label>
                            <input type="text" className={`form-control ${order == null ? 'placeholder placeholder-wave' : null}`} id="netPrice" value={order?.net_price}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="taxes" className="form-label">Taxes</label>
                            <input type="text" className={`form-control ${order == null ? 'placeholder placeholder-wave' : null}`} id="taxes" value={order?.taxes}/>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                Show description
                            </button>
                            <div>
                                <div className="collapse" id="collapseWidthExample">
                                    <div className="card card-body">
                                        {order?.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12" style={{ textAlign: 'center' }}>
                            <button type="submit" className="btn btn-primary">SAVE</button>
                            &nbsp;
                            <Link to={'/dashboard/orders'} className="btn btn-secondary">CANCEL</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderDetails;