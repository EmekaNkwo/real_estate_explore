import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsHouses } from 'react-icons/bs'

const Navbar = () => {

    const linkStyle = "hidden lg:flex transition-all hover:scale-[1.05]"
    return (
        <nav className='h-[100px] flex justify-between items-center'>
            <div className="flex-[3] flex gap-[4rem] items-center">
                <Link href="/" className="flex items-center gap-[4px]">
                    <BsHouses size={28} />
                    <span className='font-[500] text-[20px] ml-[0.2rem]'>ExploreEstate</span>
                </Link>
                <Link className={linkStyle} href="/">Home</Link>
                <Link className={linkStyle} href="/">About</Link>
                <Link className={linkStyle} href="/">Contact</Link>
                <Link className={linkStyle} href="/">Agents</Link>
            </div>
            <div className="flex-[2] bg-transparent flex justify-end items-center">
                <Link className='px-[2px] py-[2px] m-[20px] text-[#000]' href="/login">Sign in</Link>
                <Link className=' bg-[#fece51] p-3 rounded-md ml-[1rem] font-medium' href="/register" >
                    Sign up
                </Link>


            </div>
        </nav>
    )
}

export default Navbar