"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import ActiveSlider from '../../components/ActiveSlider';
import connectToDB from '../../utils/database';

const Home = () => {

  // connectToDB();
  return (
    <div className='w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-500'>
      <div className='w-full flex justify-start items-center gap-6 ml-24 pt-6 text-white'>
        <div className='w-fit hover:bg-blue-300 rounded-lg pl-4 pr-4'><p className='logo_text'>All</p></div>
        <div className='w-fit hover:bg-blue-300 rounded-lg pl-4 pr-4'><p className='logo_text'>Art</p></div>
        <div className='w-fit hover:bg-blue-300 rounded-lg pl-4 pr-4'><p className='logo_text'>Gaming</p></div>
        <div className='w-fit hover:bg-blue-300 rounded-lg pl-4 pr-4'><p className='logo_text'>Membership</p></div>
        <div className='w-fit hover:bg-blue-300 rounded-lg pl-4 pr-4'><p className='logo_text'>PFPs</p></div>
        <div className='w-fit hover:bg-blue-300 rounded-lg pl-4 pr-4'><p className='logo_text'>Photography</p></div>
        <div className='w-fit hover:bg-blue-300 rounded-lg pl-4 pr-4'><p className='logo_text'>Music</p></div>
      </div>
      {/* < ActiveSlider /> */}
    </div>

  )
}

export default Home