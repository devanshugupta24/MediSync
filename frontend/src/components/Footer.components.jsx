import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate=useNavigate()
  return (
    <div className='md:mx-10 mt-16'>
        <hr />
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm '>
            {/*-----Left section-------*/}
            <div>
                <img className='mb-5 w-40'src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>MediSync is an innovative platform connecting patients with trusted doctors. It simplifies appointment booking, offers personalized health management tools, and ensures secure access to healthcare. With features like digital records, and reminders, MediSync makes healthcare convenient and efficient to your needs.</p>
            </div>

            {/*-----Center section-------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li className='cursor-pointer hover:text-gray-700 hover:scale-105 transition-all'onClick={()=> {navigate('/');scrollTo(0,0)}}>Home</li>
                    <li className='cursor-pointer hover:text-gray-700 hover:scale-105 transition-all'onClick={()=> {navigate('/about');scrollTo(0,0)}}>About us</li>
                    <li className='cursor-pointer hover:text-gray-700 hover:scale-105 transition-all'onClick={()=> {navigate('contact');scrollTo(0,0)}}>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/*-----Right section-------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 9095032995</li>
                    <li>guptadevanshu24@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/*-------Copyright text-----*/}
            <hr className='h-0.5 bg-gray-200' />
            <p className='py-5 text-swm text-center'>Copyright 2025@ MediSync - All Right Reserved. </p>
        </div>
    </div>
  )
}

export default Footer