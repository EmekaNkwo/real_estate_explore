import Map from '@/components/Map';
import { NormalButton } from '@/shared/Buttons/CustomButton';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'
import { FaRegBookmark } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoIosBed } from 'react-icons/io';
import { IoBedOutline, IoBusOutline, IoRestaurantOutline } from 'react-icons/io5';
import { LuBath, LuSchool } from 'react-icons/lu';
import { MdOutlineMessage, MdPets } from 'react-icons/md';
import { RxDimensions } from 'react-icons/rx';

interface IProps {
    params: {
        id: string;
    };
}
const Page = ({ params: { id } }: IProps) => {

    const images = [
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/270317/pexels-photo-270317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1269785/pexels-photo-1269785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1269785/pexels-photo-1269785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]
    return (
        <div className="flex gap-[1.5rem] mt-[2rem] items-start">
            <div className="flex-[3] flex flex-col gap-3">
                <div className="flex items-start gap-3 h-[400px]">
                    <div className="h-full">
                        <Image src={images[0]} alt="item image" width={600} height={100} loading="lazy" blurDataURL={images[0]} placeholder="blur" className="rounded-[6px] h-full cursor-pointer object-cover" />
                    </div>
                    <div className="flex flex-col gap-4 justify-between h-full">
                        {
                            images.slice(1).map((image, i) => (
                                <Image key={i} src={image} alt="item image" width={150} height={100} loading="lazy" blurDataURL={image} placeholder="blur" className="rounded-[6px] h-full cursor-pointer object-cover" />
                            ))
                        }
                    </div>
                </div>
                <div className=""></div>
            </div>
            <div className="flex-[2] flex flex-col gap-[1.5rem]">
                <div className="flex flex-col gap-3">
                    <h1 className='text-2xl font-semibold'>General</h1>
                    <div className="flex items-center gap-3">
                        <FaScrewdriverWrench size={20} />
                        <div className="flex flex-col ml-1">
                            <span className='text-[18px] font-medium'>Utilities</span>
                            <span className='text-[12px]'>Renter is responsible </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdPets size={24} />
                        <div className="flex flex-col">
                            <span className='text-[18px] font-medium'>Pet policy</span>
                            <span className='text-[12px]'>Pets allowed</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <GiReceiveMoney size={24} />
                        <div className="flex flex-col">
                            <span className='text-[18px] font-medium'>Property fees</span>
                            <span className='text-[12px]'>Must have 3x the rent in total household income</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-[2rem]">
                    <h1 className='text-2xl font-semibold'>Room sizes</h1>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 w-[32%]">
                            <RxDimensions size={24} />
                            <span className='text-[16px] font-medium'>80sqm (861sqft)</span>
                        </div>
                        <div className="flex items-center gap-3 w-[32%]">
                            <IoBedOutline size={24} />
                            <span className='text-[16px] font-medium'>2 bed</span>
                        </div>
                        <div className="flex items-center gap-3 w-[32%]">
                            <LuBath size={24} />
                            <span className='text-[16px] font-medium'>1 bathroom</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-[2rem]">
                    <h1 className='text-2xl font-semibold'>Nearly Places</h1>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 w-[32%]">
                            <LuSchool size={24} />
                            <div className="flex flex-col">
                                <span className='text-[18px] font-medium'>School</span>
                                <span className='text-[14px]'>250m away</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-[32%]">
                            <IoBusOutline size={24} />
                            <div className="flex flex-col">
                                <span className='text-[18px] font-medium'>Bus Stop</span>
                                <span className='text-[14px]'>100m away</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-[32%]">
                            <IoRestaurantOutline size={24} />
                            <div className="flex flex-col">
                                <span className='text-[18px] font-medium'>Restaurant</span>
                                <span className='text-[14px]'>200m away</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-[2rem]">
                    <h1 className='text-2xl font-semibold'>Location</h1>
                    <div className="h-[300px] w-full">
                        <Map items={[
                            {
                                id: 2,
                                title: "House",
                                images: [
                                    "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                    "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                ],
                                image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                address: "123 Main Street",
                                price: 1200,
                                bedroom: 3,
                                bathroom: 2,
                                property: "House",
                                city: "San Francisco",
                                type: "rent",
                                latitude: 37.7749,
                                longitude: -122.4194,
                            },
                        ]} />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <NormalButton title='Send a message' leftIcon={<MdOutlineMessage size={20} />} />
                        <NormalButton title='Save the place' leftIcon={<FaRegBookmark size={20} />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page