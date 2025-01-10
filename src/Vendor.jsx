import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { EyeIcon, NewIcon } from './Icon';

import {loadVendors} from './api';
import FloatingButton from './FloatingButton';
import LoadingOverlay from './LoadingOverlay';

const TITLE = 'Vendors';

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
            <div className="row">
                <div className="col-11">
                    <div className="d-flex">
                        <h2>{TITLE}</h2>
                    </div>
                </div>
                <div className="col-1">
                    <Link to={'add'}>
                        <FloatingButton icon={<NewIcon/>}/>
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
                </div>
            </div>
        </div>
        <LoadingOverlay isLoading={ vendorsList.length > 0 ? false : true} />
      </>
    )
};

export default Vendor;