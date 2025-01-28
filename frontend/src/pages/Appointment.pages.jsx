import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors.components'
import { toast } from 'react-toastify'
import axios from 'axios'


const Appointment = () => {

  const {docId}=useParams()  // Extracts the docId parameter from the route URL.
  const {doctors,currencySymbol,backendUrl,token,getDoctorsData}=useContext(AppContext)

  const daysOfWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']

  const navigate=useNavigate()
  const [docInfo,setDocInfo]=useState(false)
  const [docSlots,setDocSlots]=useState([])
  const [slotIndex,setSlotIndex]=useState(0)
  const [slotTime,setSlotTime]=useState('')

  const fetchDocInfo=async()=>{
    const docInfo=doctors.find(doc=> doc._id===docId)  //Searches the doctors array for a doctor whose _id matches the docId.
    setDocInfo(docInfo)  //Updates the docInfo state with the retrieved doctor's information.
  }

  const getAvailableSlots = async () => {
    if (!docInfo) return; // Ensure docInfo is not null before proceeding.
    setDocSlots([]); // Clears the docSlots state to prepare for new data.
  
    let today = new Date(); // creates a today object to get current date and time(Date contains real-time value)
    let isTodayPastEndTime = today.getHours() >= 20; // Check if the current time is past 21:00. If true, skip today's slots.
    let firstSlotIndex = 0; // To store the index of the first available slot (used for default selection).
  
    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today); // currentDate: Creates a copy of today for the current loop iteration i.e hme kab ka date book karna hai
      currentDate.setDate(today.getDate() + i); // Sets the today's day of the month in currentDate from getDate
  
      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i); // sets the day of the month
      endTime.setHours(21, 0, 0, 0); // sets the end time to 9pm by setHours
  
      if (i === 0 && isTodayPastEndTime) {
        // Skip today's slots if the current time is past 21:00.
        continue; // Skip to the next day without adding today's slots.
      }
  
      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        // if booking the slot for today
        currentDate.setHours(currentDate.getHours() >= 10 ? currentDate.getHours() + 1 : 10); // agar aaj ka time 10 se jyada hai tb abhi jitna baj rha usse 1hr increase karke slot show karo otherwise 10am ka show karo
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0); // agar abhi time 30 se jyada ho rha hai i.e 11.45,1.50 tb slot me minutes 30 set kardo mtlb hour to next ho jayega to like agar abhi its 12.50 to slot dikhao 1.30 ka agar abhi 2.20 then slot 3:00
      } else {
        // if booking for aaj ke baad ke din ka
        currentDate.setHours(10); // hours ko 10 se start karo
        currentDate.setMinutes(0);
      }
  
      let timeSlots = []; // stores slot of the current day
  
      while (currentDate < endTime) {
        // jbtk 9 naa baj jai tbtk
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // used to format the syntax of time
  
        let day = currentDate.getDate()
        let month  = currentDate.getMonth()+1
        let year = currentDate.getFullYear()

        const slotDate=day+"-"+month +"-"+year
        const slotTime=formattedTime

        
        const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true
        

        if(isSlotAvailable){
          // add slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          })
        }

  
        // increment current time by 30mins
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
  
      setDocSlots((prev) => [...prev, timeSlots]); // Push the day's slots to docSlots.
  
      // If this is the first available day with slots, set the default `slotIndex`.
      if (firstSlotIndex === -1 && timeSlots.length > 0) {
        firstSlotIndex = i; // The first available day's index is saved for default selection.
      }
    }
  
    // Automatically select the first available slot.
    setSlotIndex(firstSlotIndex); // Dynamically set slotIndex to the first available day with slots.
  };
  
  
  const bookAppointment=async()=>{
    if(!token){
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    try {
      const date=docSlots[slotIndex][0].datetime

      let day=date.getDate()
      let month=date.getMonth()+1
      let year=date.getFullYear()

      const slotDate=day+"-"+month +"-"+year

      const {data}=await axios.post(backendUrl+'/api/user/book-appointment',{docId,slotDate,slotTime},{headers:{token}})
      if(data.success){
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointments')
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

    useEffect(()=>{
      if(doctors.length>0){
        fetchDocInfo()
      }
    },[doctors,docId])

    useEffect(()=>{
      if(docInfo){
        getAvailableSlots()
      }
    },[docInfo])



  return docInfo && (
    <div>
      {/*---------doctors details---------*/ }
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/*--------Doc info-name,degree,expreience-------*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality} </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/*-----doctor about-------*/}
           <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900'>
              About <img className='w-3'src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
           </div>
           <p className='textgray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
            </p>
        </div>
      </div>
      {/*-------booking slots-------*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-primary text-white transition-all duration-200' : 'border border-gray-200 hover:bg-blue-50  hover:transition-all duration-200'}`} key={index}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]} </p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime ?' bg-primary text-white transition-all duration-200' : 'text-gray-400 border border-gray-300 hover:bg-blue-50 hover:transition-all duration-200'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:bg-[#256878] transition-all duration-200'>Book an Appointment</button>
      </div>
      {/*-----listing related doctors------*/}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment