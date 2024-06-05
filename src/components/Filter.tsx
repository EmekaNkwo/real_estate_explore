"use client"

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CustomSelectField, NumberField, SelectField, TextField } from "@/shared/UI/InputFields";

import { FaSearch } from "react-icons/fa";

const buyOptions = [
    { label: "Any", value: "" },
    { label: "Buy", value: "buy" },
    { label: "Rent", value: "rent" },
]

const houseOptions = [
    { label: "Any", value: "" },
    { label: "Apartment", value: "apartment" },
    { label: "House", value: "house" },
    { label: "Condo", value: "condo" },
    { label: "Land", value: "land" },
]

function Filter() {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState({
        type: searchParams.get("type") || "",
        city: searchParams.get("city") || "",
        property: searchParams.get("property") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        bedroom: searchParams.get("bedroom") || "",
    });

    const handleChange = (e: any) => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value,
        });
    };

    const handleFilter = () => {
        const params = new URLSearchParams(searchParams);
        params.set("city", query.city);
        params.set("type", query.type);
        params.set("property", query.property);
        params.set("minPrice", query.minPrice);
        params.set("maxPrice", query.maxPrice);
        params.set("bedroom", query.bedroom);

    };

    return (
        <div className="flex flex-col gap-[20px]">
            <h1 className="font-[400] text-[18px]">
                Search results for <b>{searchParams.get("city")}</b>
            </h1>
            <div >
                <div className="item">
                    <input type="text" placeholder="City / Location" className="h-[45px] border-[#999] border w-full p-3 rounded-[6px]" />
                </div>
            </div>
            <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-[10px]">
                <CustomSelectField labelName="Type" options={buyOptions} />
                <CustomSelectField labelName="Property" options={buyOptions} />
                <div className="flex flex-col">
                    <span>Min Price</span>
                    <input type="text" name='minPrice' placeholder='Any' className=' p-2 outline-none h-[38px] border-[#999] border rounded-[6px]' />
                </div>
                <div className="flex flex-col">
                    <span>Min Price</span>
                    <input type="text" name='minPrice' placeholder='Any' className=' p-2 outline-none h-[38px] border-[#999] border rounded-[6px]' />
                </div>
                <div className="flex flex-col">
                    <span>Bedroom</span>
                    <input type="text" name='minPrice' placeholder='Any' className=' p-2 outline-none h-[38px] border-[#999] border rounded-[6px]' />
                </div>



                <button
                    className={` h-full  text-[15px] bg-[#fece51] px-[1.5rem] flex items-center rounded-[6px] justify-center outline-none hover:border-opacity-90`}
                >
                    <FaSearch />

                </button>

            </div>
        </div>
    );
}

export default Filter;
