import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Doctor = () => {

  const {speciality} = useParams()  //Gets the speciality parameter from the URL
  const [filterDoc,setFilterDoc]=useState([])
  const {doctors} =useContext(AppContext)
  const navigate=useNavigate()
  const [showFilter,setShowFilter]=useState(false)

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
    }else{
      setFilterDoc(doctors)
    }
  }
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter?'bg-primary text-white': ''}`}onClick={()=>setShowFilter(prev=>!prev)}>Filter</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter? 'flex': 'hidden sm:flex'}`}>
          <p onClick={()=> speciality==='General Physician'? navigate('/doctors') :navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:scale-105 ${speciality==="General Physician" ? "bg-[#d7eff5] text-black":""}`} >General Physician</p>
          <p onClick={()=> speciality==='Gynecologist'? navigate('/doctors') :navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:scale-105 ${speciality==="Gynecologist" ? "bg-[#d7eff5] text-black":""}`} >Gynecologist</p>
          <p onClick={()=> speciality==='Dermatologist'? navigate('/doctors') :navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:scale-105 ${speciality==="Dermatologist" ? "bg-[#d7eff5] text-black":""}`} >Dermatologist</p>
          <p onClick={()=> speciality==='Pediatricians'? navigate('/doctors') :navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:scale-105 ${speciality==="Pediatricians" ? "bg-[#d7eff5] text-black":""}`} >Pediatricians</p>
          <p onClick={()=> speciality==='Neurologist'? navigate('/doctors') :navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:scale-105 ${speciality==="Neurologist" ? "bg-[#d7eff5] text-black":""}`} >Neurologist</p>
          <p onClick={()=> speciality==='Gastroenterologist'? navigate('/doctors') :navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:scale-105 ${speciality==="Gastroenterologist" ? "bg-[#d7eff5] text-black":""}`} >Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6' >
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)}className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-[#7badba]' src={item.image} alt="" />
                  <div className='p-4'>
                    <div className={`flex items-center gap-2 text-sm text-center${item.available ? ' text-green-500' : 'text-gray-500'}`}>
                        <p className={`w-2 h-2 ${item.available ?' bg-green-500' : 'bg-gray-500' } rounded-full`}></p><p>{item.available ? 'Available' :'Not Available'}</p>
                    </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctor