import React from 'react'
import {assets} from '../assets/assets'


const About=()=>{
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[340px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 '>
          <p>Welcome to MediSync, your trusted healthcare companion, designed to simplify and enhance the process of connecting patients with healthcare professionals. MediSync is a cutting-edge platform dedicated to providing seamless access to a wide network of qualified doctors across various specialties. Whether you need a routine checkup, a specialist consultation, or urgent care, MediSync is here to make healthcare accessible, efficient, and stress-free.</p>
          <p>Our platform empowers users to browse profiles of experienced doctors, view their credentials. With just a few clicks, you can book appointments at your convenience—anytime, anywhere. MediSync eliminates the hassle of long queues and endless phone calls, ensuring that you get the care you need without delays.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>MediSync isn’t just a booking tool; it’s your partner in health management. We prioritize your privacy and security, ensuring your personal information is always protected.At MediSync, we are committed to building a healthier future by bridging the gap between patients and doctors. Let us help you take the first step toward better health, one appointment at a time.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='grid grid-cols-auto gap-10 mb-20'>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Streamlined appointment booking ensures quick access to the care you need without unnecessary delays.</p>
        </div>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Book appointments anytime, anywhere, from the comfort of your home or on the go.</p>
        </div>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Tailored health reminders, digital records, and recommendations for a smooth and customized healthcare journey.</p>
        </div>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Reliability</b>
          <p>Verified doctors, and transparent profiles ensure trust and informed decisions.</p>
        </div>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Security</b>
          <p>Your privacy is our priority, with robust systems to safeguard your personal and medical information.</p>
        </div>
       
        
      </div>
    </div>
  )
}

export default About