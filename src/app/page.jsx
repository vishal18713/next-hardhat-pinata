"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import ActiveSlider from '../../components/ActiveSlider';


const Home = () => {


  return (
    <div className='w-full h-screen bg-slate-950'>
      <div className='w-full flex justify-start items-center gap-6 ml-24 pt-6 text-white'>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>All</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Art</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Gaming</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Membership</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>PFPs</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Photography</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Music</p></div>
      </div>
    </div>
  )
}

export default Home