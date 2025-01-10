import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import {loadVendorDetails} from './api';

let VendorDetails = () => {
    let { id } = useParams();
    let [vendor, setVendor] = useState(null);

    useEffect(() => {
        loadVendorDetails(id, (data) => {
            setVendor(data[0]);
        },() => {
            setVendor(null);
        });
    }, [id]);

    return (
        <>
            <div className="container container-fluid">
                <div className="d-flex">
                    <h2>Vendor details</h2>
                </div>

                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={'/dashboard/vendors'} className="nav-link">Vendors</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Vendor details</li>
                </ol>
                </nav>
                <br/>
                {
                    vendor && vendor !== null ? 
                    <div className="d-flex">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">{vendor.firstname} { vendor.lastname}</h5>
                            <p className="card-text">
                                Email: {vendor.email}
                            </p>
                            <Link to={'/dashboard/vendors'} className="btn btn-primary">Back to vendors</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Please wait...</span>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default VendorDetails;