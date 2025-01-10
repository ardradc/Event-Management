import Menubar from "./Menubar";
import Footer from "./Footer";

import {Outlet } from 'react-router';
import Sidebar from "./Sidebar";

let  DashboardLayout = () => {
    return(
      <>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <Sidebar/>
            <div className="col py-3">
              <Menubar/>
              <Outlet/>
              <Footer/>
            </div>
          </div>
        </div>
      </>
    )
  };
  
  export default DashboardLayout;
  