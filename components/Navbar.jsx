"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {

    return (
        <nav className='flex-between w-full mb-16 pt-3 gap-10'>
            <Link href='/' className='flex gap-2 flex-center'>
                <p className='logo_text'>Noktua</p>
            </Link>
            <div className="flex-between ml-4 mr-4">
                <p className="logo_text">Home</p>
                <p className="logo_text">Drop</p>
                <p className="logo_text">Stats</p>
                <p className="logo_text">Create</p>
            </div>
            <input
            type = "text"
            placeholder="Search..."
            required
            className="peer" 
            />
            <button className="black_btn">Login</button>

        </nav>
    );
};

export default Nav; 