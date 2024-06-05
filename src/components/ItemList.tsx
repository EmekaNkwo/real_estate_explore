import { IHouse } from '@/models'
import React from 'react'
import CardItem from './CardItem'

const ItemList = ({ items, loading }: { items: IHouse[], loading?: boolean }) => {
    return (
        <div className='flex flex-col gap-[5px]'>
            {items?.map((item) => (
                <CardItem key={item.id} item={item} loading={loading} />
            ))}
        </div>
    )
}

export default ItemList