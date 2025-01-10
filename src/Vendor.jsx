import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { EyeIcon } from './Icon';

import {loadVendors} from './api';

let Vendor = () => {
    let [vendorsList, setVendorsList] = useState([]);
    
    useEffect(() => {
        loadVendors((data) => {
            let rows = data.map((vendor) => {
                return generateRow(vendor);
            });
            setVendorsList(rows);
        },() => {
            setVendorsList([]);
        });
    }, []);

    function generateRow(vendor) {
        return (
            <tr key = {vendor.id}>
                <th scope="row">{vendor.id}</th>
                <td>{vendor.firstname}</td>
                <td>{vendor.lastname}</td>
                <td>@{vendor.email}</td>
                <td><Link to={`details/${vendor.id}`}><EyeIcon/> </Link></td>
            </tr>
        );
    }
  
    return (
      <>
        <div className="container container-fluid">
            <div className="d-flex">
                <h2>Vendors list</h2>
            </div>
            <br/>
            
            {
                vendorsList.length === 0 ?

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
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendorsList}
                        </tbody>
                    </table>
                </div>
                
            }
        </div>
      </>
    )
};

export default Vendor;