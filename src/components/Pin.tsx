import { Marker, Popup } from "react-leaflet";
import Image from "next/image";
import Link from "next/link";


function Pin({ item }: { item: Record<string, any> }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <Link href={`/${item.id}`} className="flex flex-col gap-[2px] items-center">
                    <Image src={item.images[0]} alt="" width={64} height={68} className="object-cover rounded-[6px]" />
                    <div className="flex flex-col justify-between">
                        <span >{item.title}</span>
                        <b>$ {item.price}</b>
                    </div>
                </Link>
            </Popup>
        </Marker>
    );
}

export default Pin;
