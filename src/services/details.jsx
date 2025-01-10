import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import {loadServiceDetails} from '../api';

const TITLE = 'Service details';

let ServiceDetails = () => {
    let { id } = useParams();
    let [service, setService] = useState(null);
    let [tags, setTags] = useState([]);

    useEffect(() => {
        loadServiceDetails(id, (data) => {
            setService(data[0]);
        },() => {
            setService(null);
        });
    }, [id]);

    useEffect(() => {
        service !== null ? buildTags() : null;
    }, [service]);

    function buildTags() {
        setTags(service.tags.map((tag, index) => {
           return (
            <span key={index} className="badge rounded-pill text-bg-light ">{tag}</span>
           )
        }));
    }

    return (
        <>
            <div className="container container-fluid">
            <div className="d-flex">
                    <h2>{TITLE}</h2>
                </div>
                <div className="d-flex">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/dashboard/services'} className="nav-link">Services</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{TITLE}</li>
                        </ol>
                    </nav>
                </div>
                <br/>

                {
                    service && service !== null ? 
                    <div className="d-flex">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="serviceName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="serviceName" value={service.name}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="upc" className="form-label">UPC</label>
                                <input type="text" className="form-control" id="upc" value={service.upc}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="ean" className="form-label">EAN</label>
                                <input type="text" className="form-control" id="ean" value={service.ean}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="text" className="form-control" id="price" value={service.price}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="netPrice" className="form-label">Net price</label>
                                <input type="text" className="form-control" id="netPrice" value={service.net_price}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="taxes" className="form-label">Taxes</label>
                                <input type="text" className="form-control" id="taxes" value={service.taxes}/>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                    <label htmlFor="taxes" className="form-label">Tags: </label>
                                    {tags}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="icon-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                    Show description
                                </button>
                                <div>
                                    <div className="collapse" id="collapseWidthExample">
                                        <div className="card card-body">
                                            {service.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">SAVE</button>
                            </div>
                        </form>
                    </div>
                    :
                    <div className="d-flex">
                        <form className="row g-3">
                            <div className="col-md-12 ">
                                <label htmlFor="serviceName" className="form-label">Name</label>
                                <input type="text" className="form-control placeholder-glow placeholder" id="serviceName"/>
                            </div>
                        </form> 
                    </div>
                }
            </div>
        </>
    );
};

export default ServiceDetails;