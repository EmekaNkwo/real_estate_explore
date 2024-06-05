
import CardItem from "@/components/CardItem";
import Filter from "@/components/Filter";
import Map from "@/components/Map";
import { Suspense } from "react";

const page = () => {
    // const data = useLoaderData();
    const postResponse: Record<string, any>[] = [
        {
            id: 1,
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
    ]
    return (
        <div className="flex gap-[1.5rem] mt-[2rem]">
            <div className="flex-[3]">
                <div className="flex flex-col gap-[2rem] mb-[1rem]">
                    <Filter />
                    {
                        postResponse.map((post) => (
                            <CardItem key={post.id} item={post} />
                        ))
                    }
                </div>
            </div>
            <div className="flex-[2] h-[80vh] top-2 sticky w-full">
                <Map items={postResponse} />
            </div>
        </div>
    );
}

export default page;
