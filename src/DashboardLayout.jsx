
import { Outlet } from "react-router";
import Menubar from "./Menubar";
import Sidebar from "./Sidebar";
import Footer from './Footer';

let  DashboardLayout = () => {
    return (
      <div>
        <Menubar />
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1 p-3" style={{ marginLeft: "250px", marginTop: "56px" }}>
            <Outlet/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  };
  
  export default DashboardLayout;
  