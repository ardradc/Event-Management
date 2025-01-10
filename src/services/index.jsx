import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { EyeIcon, NewServiceIcon } from '../Icon';

import {loadServices} from '../api';
import FloatingButton from '../FloatingButton';
import LoadingOverlay from '../LoadingOverlay';

const TITLE = 'Services';

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
                <td><Link to={`details/${service.id}`}><div className="text-dark"><EyeIcon/></div></Link></td>
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
                    <Link to={'add'}>
                        <FloatingButton icon={<NewServiceIcon/>}/>
                    </Link>
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
                                {servicesList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <LoadingOverlay isLoading={ servicesList.length > 0 ? false : true} />
      </>
    )
};

export default Service;