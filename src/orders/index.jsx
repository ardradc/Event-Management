import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { EyeIcon } from '../Icon';
import {loadOrders} from '../api';
import LoadingOverlay from '../LoadingOverlay';

const TITLE = 'Orders';

let Order = () => {
    let [ordersList, setOrdersList] = useState([]);
    
    useEffect(() => {
        loadOrders((data) => {
            let rows = data.map((order) => {
                return generateRow(order);
            });
            setOrdersList(rows);
        },() => {
            setOrdersList([]);
        });
    }, []);

    function generateRow(order) {
        return (
            <tr key = {order.id}>
                <th scope="row">{order.id}</th>
                <td>{order.name}</td>
                <td>{order.upc}</td>
                <td>{order.ean}</td>
                <td>{order.price}</td>
                <td><Link to={`details/${order.id}`}><EyeIcon/> </Link></td>
            </tr>
        );
    }
  
    return (
      <>
        <div className="container container-fluid">
            <div className="row">
                <div className="col-11">
                    <div className="d-flex">
                        <h2>{TITLE}</h2>
                    </div>
                </div>
                <div className="col-1">
                    &nbsp;
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex">
                        <table className="table table-hover table-bordered table-striped">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">UPC</th>
                                <th scope="col">EAN</th>
                                <th scope="col">Price</th>
                                <th scope="col">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <LoadingOverlay isLoading={ ordersList.length > 0 ? false : true} />
      </>
    )
};

export default Order;