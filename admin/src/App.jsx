import React from 'react'
import Login from './pages/Login.pages'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {AdminContext} from './context/AdminContext'
import { useContext } from 'react'
import Navbar from './components/Navbar.components'
import Sidebar from './components/Sidebar.components'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard.pages'
import AllAppointments from './pages/Admin/AllAppointments.pages'
import AddDoctor from './pages/Admin/AddDoctor.pages'
import DoctorsList from './pages/Admin/DoctorsList.pages'


const App = () => {

  const {aToken}=useContext(AdminContext)

  return aToken? (
    <div className='bg-[#F8F9FD]'>     
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllAppointments/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctors-list' element={<DoctorsList/>}/>

        </Routes>
      </div>
    </div>
  ) :(
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App