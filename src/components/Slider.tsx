"use client"

import { Carousel } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

const Slider = ({ images }: { images: string[] }) => {
    return (
        <div>
            {
                images.length === 0 ? "No images" : <Carousel arrows infinite={false}>
                    {
                        images.map((image, i) => (
                            <Image src={image} alt={`${i}`} key={i} className={"slider"} />
                        ))
                    }
                </Carousel>
            }
        </div>
    )
}

export default Slider