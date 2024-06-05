import Image from 'next/image'
import Link from 'next/link'
import { FaBath, FaBed, FaBookmark, FaEnvelope, FaLocationDot, } from "react-icons/fa6";
import React from 'react'
import { IHouse } from '@/models';
import { Card } from 'antd';

const Meta = Card;
type CardItem = {
    item: Record<string, any>
    loading?: boolean
}
const CardItem = ({ item, loading }: CardItem) => {
    const featureStyling = "flex items-center gap-[5px] bg-[#e8e8e8] p-[5px] rounded-[5px]"
    const iconStyling = "border-[2px] border-[#e8e8e8] cursor-pointer px-[5px] py-[5px] rounded-[5px] cursor-pointer flex items-center justify-center hover:border-[#444]  transition-all"

    return (
        <>
            <div className="flex gap-[20px] items-center" >
                <Link href={`/lists/${item.id}`} className="flex-[2] h-[200px]">
                    <Image src={item?.image || ""} alt="" width={200} height={200} className='w-full h-full object-cover rounded-[10px]' />
                </Link>
                <div className="flex-[3] flex flex-col gap-[10px]">
                    <h2 className="text-[28px] font-[500] text-[#444] transition-all hover:text-[#000] hover:scale-[1.01]">
                        <Link href={`/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p className="text-[16px] flex items-center gap-[5px] text-[#000]">
                        <FaLocationDot />
                        <span>{item.address}</span>
                    </p>
                    <p className="text-[20px] font-[300] p-[5px] rounded-[5px] bg-[#fecd5170] w-fit">$ {item.price}</p>
                    <div className="flex gap-[20px] text-[14px] justify-between items-center">
                        <div className="flex gap-[20px] text-[14px]">
                            <div className={featureStyling}>
                                <FaBed />
                                <span>{item.bedroom} bedroom</span>
                            </div>
                            <div className={featureStyling}>
                                <FaBath />
                                <span>{item.bathroom} bathroom</span>
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div className={iconStyling}>
                                <FaBookmark />
                            </div>
                            <div className={iconStyling}>
                                <FaEnvelope />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CardItem