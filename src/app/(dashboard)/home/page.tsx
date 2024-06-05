/* eslint-disable react/no-unescaped-entities */
import SearchBar from '@/components/SearchBar'
import { Background } from '@/shared/Assets'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className="flex h-full mt-[5rem]">
            <div className="flex-[3]">
                <div className="lg:pr-[100px] md:pr-[50px] pr-0 justify-start flex flex-col lg:justify-center gap-[50px] h-full ">
                    <h1 className="lg:text-[64px] text-[48px] font-semibold leading-[5rem]">Unlock Your Future with the Perfect Home</h1>
                    <p>
                        Explore, find, and fall in love with your new space. Discover the perfect blend of comfort and style, where every corner tells a story waiting to be explored. Immerse yourself in a world of possibilities, where dreams meet reality and every detail is crafted with care and precision. Let your imagination soar as you embark on a journey to unlock the hidden treasures of your future home.
                    </p>
                    <SearchBar />
                    <div className="flex justify-between">
                        <div className="box">
                            <h1 className='lg:text-[36px] text-[32px]'>16+</h1>
                            <h2 className='text-[20px] font-[300]'>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1 className='lg:text-[36px] text-[32px]'>200</h1>
                            <h2 className='text-[20px] font-[300]'>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1 className='lg:text-[36px] text-[32px]'>2000+</h1>
                            <h2 className='text-[20px] font-[300]'>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-[2] bg-[#fcf5f3] relative lg:flex items-center hidden ">
                {/* <Image src={Background} alt="" height={50} className='lg:w-[115%] w-[105%] absolute right-0' /> */}
            </div>
        </div>
    )
}

export default page