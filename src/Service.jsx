import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { EyeIcon } from './Icon';

import {loadServices} from './api';

let Service = () => {
    let [servicesList, setServicesList] = useState([]);
    
    useEffect(() => {
        loadServices((data) => {
            let rows = data.map((service) => {
                return generateRow(service);
            });
            setServicesList(rows);
        },() => {
            setServicesList([]);
        });
    }, []);

    function generateRow(service) {
        return (
            <tr key = {service.id}>
                <th scope="row">{service.id}</th>
                <td>{service.name}</td>
                <td>{service.upc}</td>
                <td>{service.ean}</td>
                <td>{service.price}</td>
                <td><Link to={`details/${service.id}`}><EyeIcon/> </Link></td>
            </tr>
        );
    }
  
    return (
      <>
        <div className="container container-fluid">
            <div className="d-flex">
                <h2>Services list</h2>
            </div>
            <br/>
            
            {
                servicesList.length === 0 ?

                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Please wait...</span>
                    </div>
                </div>

            :
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
                            {servicesList}
                        </tbody>
                    </table>
                </div>
                
            }
        </div>
      </>
    )
};

export default Service;