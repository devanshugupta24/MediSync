import React from 'react'
import {assets} from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col items-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-2/3 md:max-w-[340px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500 text-center md:text-start'>Bhabua kaimur <br />821101 , bihar</p>
          <p className='text-gray-500 text-center md:text-start'>+91 9142088391 <br />email : guptadevanshu24@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at MediSync</p>
          <p className='text-gray-500'>learn more about our jobs and team openings</p>
          <button className='border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact