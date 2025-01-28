import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
function Header() {

    const navigate=useNavigate()
  return (

    <div className='flex flex-col md:flex-row items-center justify-end  bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* ------Left Side--------*/ }
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-10'>
                MediSync <br/><span className='text-xl'>"Connecting Patients with care Seamlessly"</span>
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3'>
                <img className='w-28'src={assets.group_profiles} alt="" />
                <p className='w-full text-white'>Browse thorugh our extensive list of trusted doctors,<br className='hidden sm:block'/>schedule your appointment hassle-free</p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-200 hover:bg-gray-100'>
                Book appointment <img className='w-3' src= {assets.arrow_icon} alt="" />
            </a>
        </div>

        { /*------Right Side--------*/ }
        <div className='md:w-2/5 h-35 flex flex-col items-center rounded-lg relative'>
            <p className='hidden md:block text-white rounded-lg text-2xl font-semibold'>About Us</p>
            <p className='hidden md:block text-white w-2/3 break-words p-3  rounded-md'>
            Welcome to MediSync, your trusted healthcare companion, designed to simplify and enhance the process of connecting patients with healthcare professionals. MediSync is a cutting-edge platform  ... <button onClick={()=>{navigate(`/about`); scrollTo(0,0)}}className=' text-teal-900 text- rounded-full hover:scale-105 transition all duration-300'>read more</button>
            </p>
        </div>
    </div>



    // <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
    //     {/* ------Left Side-------- */}
    //     <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
    //         <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
    //             Book Appointment <br/>With Trusted Doctors
    //         </p>
    //         <div className='flex flex-col md:flex-row items-center gap-3'>
    //             <img className='w-28'src={assets.group_profiles} alt="" />
    //             <p className='w-full text-white'>Browse thorugh our extensive list of trusted doctors,<br className='hidden sm:block'/>schedule your appointment hassle-free</p>
    //         </div>
    //         <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-200 hover:bg-gray-100'>
    //             Book appointment <img className='w-3' src= {assets.arrow_icon} alt="" />
    //         </a>
    //     </div>

    //     {/* ------Right Side-------- */}
    //     <div className='md:w-1/2 relative'>
    //         <img className='w-full md:absolute bottom-0 h-auto rounded-lg 'src={assets.header_img} alt="" />
    //     </div>
    // </div>
  )
}

export default Header