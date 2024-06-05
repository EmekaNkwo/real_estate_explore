"use client"

import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from 'react-leaflet'
import Pin from './Pin';

const Map = ({ items }: { items: Record<string, any>[] }) => {

    const position: [number, number] = items?.length === 1
        ? [items[0].latitude, items[0].longitude]
        : [52.4797, -1.90269]

    return (
        <MapContainer
            center={position}
            zoom={7}
            scrollWheelZoom={false}
            className="w-full h-full rounded-[20px]"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items?.map((item) => (
                <Pin item={item} key={item.id} />
            ))}
        </MapContainer>
    )
}

export default Map