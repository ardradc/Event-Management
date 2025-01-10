import { useState } from "react";
import {useNavigate} from 'react-router';

import { LogoutIcon } from './Icon';

// eslint-disable-next-line react/prop-types
const ConfirmLogout = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Logout</h5>
            <button type="button" className="btn-close" onClick={onCancel}></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to log out from the system?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>NO</button>
            <button type="button" className="btn btn-danger" onClick={onConfirm}>YES</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoutButton = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div>
      <button className="btn btn-light" onClick={() => setShowModal(true)}><LogoutIcon/></button>
      {showModal && <ConfirmLogout onConfirm={handleLogout} onCancel={() => setShowModal(false)} />}
    </div>
  );
};

export default LogoutButton;
