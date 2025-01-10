import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import {loadUserDetails} from './api';

let UserDetails = () => {
    let { id } = useParams();
    let [user, setUser] = useState(null);

    useEffect(() => {
        loadUserDetails(id, (data) => {
            setUser(data[0]);
        },() => {
            setUser(null);
        });
    }, [id]);

    return (
        <>
            <div className="container container-fluid">
            <div className="d-flex">
                    <h2>User details</h2>
                </div>
                <div className="d-flex">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/dashboard/users'} className="nav-link">Users</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">User details</li>
                        </ol>
                    </nav>
                </div>
                <br/>

                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/dashboard/users'} className="nav-link">Users</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">User details</li>
                </ol>
                </nav>
                <br/>

                {
                    user && user !== null ? 
                    <div className="d-flex">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" value={user.firstname}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" value={user.lastname}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="emailaddress" className="form-label">Email address</label>
                                <input type="text" className="form-control" id="emailaddress" value={user.email}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input type="text" className="form-control" id="id" value={user.uuid}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                                <input type="text" className="form-control" id="phoneNumber" value={user.phone}/>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">SAVE</button>
                            </div>
                        </form>
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

export default UserDetails;