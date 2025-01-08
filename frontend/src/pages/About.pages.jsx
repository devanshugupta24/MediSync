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
          <p>Welcome to MediSync. jjjjjjllllll llllll lllllllllllllll llllllllllll l lllll lllll llll lllllllllll lllllllllllll llllll lllllll lllllll ljjjjjj jjjjjjjj jjjj jjjjjjjjj jjjjj jjjjjjj jjjj jjjjjjjjj jjjkkkkkkk kkkkkkkkk kkkkkkk k kkkkkkkkkkk kkkkkkkkk kkkkkkkkkk kkk kkkkkk kkkkkkk kkkkkkklll lllllll lllllll llllllll lllllll llll ll llllll llllll lllll</p>
          <p>llll lll lllllll llllll lllllllll llllllll lllllll llllllll llllll llllllll llllllll lllllll lllllll lllllll llllllll lllllll llllllll lllllll llllll llllll llllllll lllll lllllll llllllll llllllll lllllll lllllll lllll lllll llllllll llllllll llllllll lllllll llllllll lllllll lllllll</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>llllll llllllllllll lllllllll llllllll lllllll lllllllll llllll llllllll llllll lllll lllllll lllllllll llllllll lllllll llllllll llllll llllllllll llllllll lllllll llllllll lllllll lllllll lllllllll lllllll llllllll llllllll lllllllll llllllll lllllll llllllll llll</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='grid grid-cols-auto gap-10 mb-20'>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>streamlined appoontment llllll llllll lll lllllll lllllll scheduling that firs into your bust liefetyle</p>
        </div>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>accesss to a metwork of triusted healtcuar porfesionsla in your area</p>
        </div>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>taioored recommendations and reminders to help yiu stay top of your health</p>
        </div>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>streamlined appoontment scheduling that firs into your bust liefetyle</p>
        </div>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>streamlined appoontment scheduling that firs into your bust liefetyle</p>
        </div>
        <div className='border px-5 md:px-10 sm:py-8 flex flex-col rounded-sm gap-5 text-[-15px] hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>streamlined appoontment scheduling that firs into your bust liefetyle</p>
        </div>
        
      </div>
    </div>
  )
}

export default About