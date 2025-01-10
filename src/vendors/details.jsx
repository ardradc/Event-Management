import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import {loadVendorDetails} from '../api';

const TITLE = 'Vendor details';

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
                <div className="d-flex">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/dashboard/vendors'} className="nav-link">Vendors</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{TITLE}</li>
                        </ol>
                    </nav>
                </div>
                <br/>

                <div className="d-flex">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input type="text" className={`form-control ${vendor == null ? 'placeholder placeholder-wave' : null}`} id="firstName" value={vendor?.firstname}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input type="text" className={`form-control ${vendor == null ? 'placeholder placeholder-wave' : null}`} id="lastName" value={vendor?.lastname}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="emailaddress" className="form-label">Email address</label>
                            <input type="text" className={`form-control ${vendor == null ? 'placeholder placeholder-wave' : null}`} id="emailaddress" value={vendor?.email}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="id" className="form-label">ID</label>
                            <input type="text" className={`form-control ${vendor == null ? 'placeholder placeholder-wave' : null}`} id="id" value={vendor?.uuid}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                            <input type="text" className={`form-control ${vendor == null ? 'placeholder placeholder-wave' : null}`} id="phoneNumber" value={vendor?.phone}/>
                        </div>
                        <div className="col-12" style={{ textAlign: 'center' }}>
                            <button type="submit" className="btn btn-primary">SAVE</button>
                            &nbsp;
                            <Link to={'/dashboard/vendors'} className="btn btn-secondary">CANCEL</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default VendorDetails;