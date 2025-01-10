import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter, Routes, Route } from 'react-router';
import DashboardLayout from './DashboardLayout.jsx';

import Home from './dashboard/index.jsx';

import User from './users/index.jsx';
import AddUser from './users/add.jsx';
import UserDetails from './users/details.jsx';

import Vendor from './vendors/index.jsx';
import AddVendor from './vendors/add.jsx';
import VendorDetails from './vendors/details.jsx';

import Service from './services/index.jsx';
import AddService from './services/add.jsx';
import ServiceDetails from './services/details.jsx';

import Error from './error/Error.jsx';
import Login from './login/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}></Route>

        <Route path='dashboard' element={<DashboardLayout/>}>
          <Route index element={<Home/>}></Route>
          
          <Route path='users' element={<User/>}></Route>
          <Route path='users/add' element={<AddUser/>}></Route>
          <Route path='users/details/:id' element={<UserDetails/>}></Route>

          <Route path='vendors' element={<Vendor/>}></Route>
          <Route path='vendors/add' element={<AddVendor/>}></Route>
          <Route path='vendors/details/:id' element={<VendorDetails/>}></Route>

          <Route path='services' element={<Service/>}></Route>
          <Route path='services/add' element={<AddService/>}></Route>
          <Route path='services/details/:id' element={<ServiceDetails/>}></Route>
        </Route>

        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
