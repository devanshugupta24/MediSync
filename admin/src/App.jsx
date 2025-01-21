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
import { DoctorContext } from './context/DoctorContext'
import DoctorDashboard from './pages/Doctor/DoctorDashboard'
import DoctorAppointments from './pages/Doctor/doctorAppointments'
import DoctorProfile from './pages/Doctor/DoctorProfile'


const App = () => {

  const {aToken}=useContext(AdminContext)
  const {dToken}= useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>     
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/*------Admin Route------*/}
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllAppointments/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctors-list' element={<DoctorsList/>}/>

          {/*------Doctor Route------*/}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/doctor-appointments' element={<DoctorAppointments/>}/>
          <Route path='/doctor-profile' element={<DoctorProfile/>}/>
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