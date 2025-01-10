import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import {BrowserRouter, Routes, Route } from 'react-router';
import DashboardLayout from './DashboardLayout.jsx';

import Home from './Home.jsx';

import User from './User.jsx';
import AddUser from './AddUser.jsx';
import UserDetails from './UserDetails.jsx';

import Vendor from './Vendor.jsx';
import VendorDetails from './VendorDetails.jsx';

import Service from './Service.jsx';
import ServiceDetails from './ServiceDetails.jsx';

import Error from './Error.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}></Route>

        <Route path='dashboard' element={<DashboardLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='users' element={<User/>}></Route>
          <Route path='users/details/:id' element={<UserDetails/>}></Route>
          <Route path='users/add' element={<AddUser/>}></Route>
          <Route path='vendors' element={<Vendor/>}></Route>
          <Route path='vendors/details/:id' element={<VendorDetails/>}></Route>
          <Route path='services' element={<Service/>}></Route>
          <Route path='services/details/:id' element={<ServiceDetails/>}></Route>
        </Route>

        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
