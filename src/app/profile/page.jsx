import React from 'react'
import Profile from '../../../components/Profile'
import { FaPencilAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className='w-full h-screen bg-zinc-900'>
        <div className='w-full h-[35%] bg-zinc-800 hover:bg-zinc-700 flex justify-center items-center'>
          <div className='text-white opacity-70'><FaPencilAlt /></div>
        </div>
        <Profile />
    </div>
  )
}

export default page