import React from 'react'
import Login from './pages/Login.pages'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {AdminContext} from './context/AdminContext'
import { useContext } from 'react'


const App = () => {

  const {aToken}=useContext(AdminContext)

  return aToken? (
    <div>     
      <ToastContainer/>
    </div>
  ) :(
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App