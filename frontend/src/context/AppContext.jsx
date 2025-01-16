import { createContext, useEffect } from "react";
// createContext allows components to share values (like state) without 
// passing props manually through every level of the component tree.
import axios from 'axios'
import { useState } from "react";
import {toast} from 'react-toastify'
export const AppContext=createContext()
//Creates a new context object

const AppContextProvider=(props)=>{

    const currencySymbol='$'
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [doctors,setDoctors]=useState([])
    const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):false)

  

    const getDoctorsData=async()=>{
        try{
            const {data}=await axios.get(backendUrl+'/api/doctor/list')
            if(data.success){
                setDoctors(data.doctors)
            }else{
                toast.error(data.message)
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const value={
        doctors,currencySymbol,token,setToken,backendUrl
    }

    useEffect(()=>{
        getDoctorsData()
    },[])

    return (
        //Wraps the context provider around child components.
        //This renders the children components passed to the AppContextProvider.
        <AppContext.Provider value={value}>
            {props.children} 
        </AppContext.Provider>
    )
}

export default AppContextProvider