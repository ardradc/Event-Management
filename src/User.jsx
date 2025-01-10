import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { EyeIcon, NewIcon } from './Icon';

import {loadUsers} from './api';
import FloatingButton from './FloatingButton';
import LoadingOverlay from './LoadingOverlay';

const TITLE = 'Users';

let User = () => {
    let [usersList, setUsersList] = useState([]);
    
    useEffect(() => {
        loadUsers(
        (data) => {
            let rows = data.map((user) => {
                return generateRow(user);
            });
            setUsersList(rows);
        },
        (error) => {
            console.log(error);
            setUsersList([]);
        });
    }, []);

    function generateRow(user) {
        return (
            <tr key = {user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>@{user.email}</td>
                <td><Link to={`details/${user.id}`}><EyeIcon/> </Link></td>
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
                                {usersList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <LoadingOverlay isLoading={ usersList.length > 0 ? false : true} />     
      </>
    )
};

export default User;