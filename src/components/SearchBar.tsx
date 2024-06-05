"use client"


import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const types = ["buy", "rent"];
const SearchBar = () => {
    const router = useRouter()
    const [buyType, setBuyType] = useState(types[0]);
    const switchType = (val: string) => {
        setBuyType(val);
    };
    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const numberRegex = /^\d+$/;

    const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (numberRegex.test(e.target.value)) {
            setMinPrice(e.target.value);
        }
    }

    const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (numberRegex.test(e.target.value)) {
            setMaxPrice(e.target.value);
        }
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/lists")
    }

    return (
        <div className="flex flex-col">
            <div className="border-[#999] border border-b-0 w-[210px] flex h-[60px] rounded-tl-[6px] rounded-tr-[6px]">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={`${buyType === type ? "bg-[#000] text-[#fff]" : ""} h-full w-full `}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form className='flex items-center border-[#999] border' onSubmit={handleSearch}>
                <div className="flex items-center w-full p-[1.2rem]">
                    <input type="text" name='city' placeholder='City / Location' className='outline-none' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} value={location} />
                    <input type="text" name='minPrice' placeholder='Min Price' className='outline-none' onChange={handleMinPrice} value={minPrice} />
                    <input type="text" name='maxPrice' placeholder='Max Price' className='outline-none' onChange={handleMaxPrice} value={maxPrice} />
                </div>


                <button
                    className={` h-full  text-[15px] bg-[#fece51] px-[1.5rem] flex items-center justify-center outline-none hover:border-opacity-90`}

                >
                    <FaSearch />

                </button>
            </form>
        </div>
    )
}

export default SearchBar