import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.pages'
import About from './pages/About.pages'
import Appointment from './pages/Appointment.pages'
import Contact from './pages/Contact.pages'
import Doctor from './pages/Doctor.pages'
import Login from './pages/Login.pages'
import MyAppointment from './pages/MyAppointments.pages'
import MyProfile from './pages/MyProfile.pages'
import Navbar from './components/Navbar.components'
import Footer from './components/Footer.components'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctor/>} />
        <Route path='/doctors/:speciality' element={<Doctor/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointment/>} /> 
        <Route path='/appointment/:docId' element={<Appointment/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App