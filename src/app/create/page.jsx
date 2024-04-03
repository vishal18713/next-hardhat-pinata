import React from 'react'
import { CgSoftwareUpload } from "react-icons/cg";

const page = () => {
  return (
    <div className='w-full h-screen bg-black flex justify-start items-center'>
      <div className='w-1/2 h-3/4 flex flex-col items-center justify-center mx-20'>
        <div className='justify-start'>
       <h1 className='text-white text-4xl font-semibold'>Create and NFT</h1>
       <p className='text-white py-4 text-lg font-medium'>Once your item is minted you will not be able to change any of its information.</p>
       </div>
       <div className='w-[70%] h-[80%] outline-dashed outline-2 outline-offset-2 outline-slate-700 rounded-lg my-8 flex flex-col justify-center items-center hover:bg-zinc-900'>
       <CgSoftwareUpload className='text-white w-12 h-12' />
       <p className='text-white font-medium text-lg pt-4'>Drag and drop media</p>
       <p className='text-blue-500'>Browse files</p>
       <p className='text-white text-sm opacity-70 pt-2'>Max size : 50MB</p>
       <p className='text-white text-sm opacity-70'>JPG, PNG, GIF, SVG, MP4</p>
       </div>
      </div>

      <div className='w-1/2 h-max flex flex-col justify-center items-start'>
      <p className='text-white text-lg font-semibold px-2'>Collection *</p>
        <div className='w-[70%] h-24 px-2 py-2 bg-zinc-900 rounded-xl my-2 hover:bg-zinc-800'>
          
        </div>
        <p className='text-white text-sm opacity-60 px-2'>Not all collections are eligible. <span className='text-blue-500'>Learn more</span></p>
        <p className='text-white text-lg font-semibold px-2 pt-12 pb-4'>Name *</p>
        <input type="text" placeholder="Name your NFT" required className="search_input_trans_create peer" />
        <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>Supply *</p>
        <input type="text" placeholder="1" required className="search_input_trans_create peer" />
        <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>Description</p>
        <textarea type="text" placeholder="Search..." required className="search_input_trans_create peer" />
        <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>External links</p>
        <input type="text" placeholder="https://collection.io/123" required className="search_input_trans_create peer" />
        <div className='w-[70%] flex justify-end items-center py-12 '><button className='blue_btn'>Create</button></div>
      </div>
      
    </div>
  )
}

export default page