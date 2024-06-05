import Map from '@/components/Map';
import Image from 'next/image';
import DOMPurify from "dompurify";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Slider from '@/components/Slider';

const Page = () => {
    const post: Record<string, any> = {}
    // const post = useLoaderData();
    const [saved, setSaved] = useState(post.isSaved);

    const router = useRouter();

    const handleSave = async () => {
        // if (!currentUser) {
        //     navigate("/login");
        // }
        // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
        // setSaved((prev) => !prev);
        // try {
        //     await apiRequest.post("/users/save", { postId: post.id });
        // } catch (err) {
        //     console.log(err);
        //     setSaved((prev) => !prev);
        // }
    };
    return (
        <div><div className="details">
            <div className="wrapper">
                <Slider images={post.images} />
                <div className="info">
                    <div className="top">
                        <div className="post">
                            <h1>{post.title}</h1>
                            <div className="address">
                                <Image src="/pin.png" alt="" />
                                <span>{post.address}</span>
                            </div>
                            <div className="price">$ {post.price}</div>
                        </div>
                        <div className="user">
                            <Image src={post.user.avatar} alt="" />
                            <span>{post.user.username}</span>
                        </div>
                    </div>
                    <div
                        className="bottom"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(post.postDetail.desc),
                        }}
                    ></div>
                </div>
            </div>
        </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <Image src="/utility.png" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                {post.postDetail.utilities === "owner" ? (
                                    <p>Owner is responsible</p>
                                ) : (
                                    <p>Tenant is responsible</p>
                                )}
                            </div>
                        </div>
                        <div className="feature">
                            <Image src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                {post.postDetail.pet === "allowed" ? (
                                    <p>Pets Allowed</p>
                                ) : (
                                    <p>Pets not Allowed</p>
                                )}
                            </div>
                        </div>
                        <div className="feature">
                            <Image src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Income Policy</span>
                                <p>{post.postDetail.income}</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <Image src="/size.png" alt="" />
                            <span>{post.postDetail.size} sqft</span>
                        </div>
                        <div className="size">
                            <Image src="/bed.png" alt="" />
                            <span>{post.bedroom} beds</span>
                        </div>
                        <div className="size">
                            <Image src="/bath.png" alt="" />
                            <span>{post.bathroom} bathroom</span>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <Image src="/school.png" alt="" />
                            <div className="featureText">
                                <span>School</span>
                                <p>
                                    {post.postDetail.school > 999
                                        ? post.postDetail.school / 1000 + "km"
                                        : post.postDetail.school + "m"}{" "}
                                    away
                                </p>
                            </div>
                        </div>
                        <div className="feature">
                            <Image src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>{post.postDetail.bus}m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <Image src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>{post.postDetail.restaurant}m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[post]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <Image src="/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button
                            onClick={handleSave}
                            style={{
                                backgroundColor: saved ? "#fece51" : "white",
                            }}
                        >
                            <Image src="/save.png" alt="" />
                            {saved ? "Place Saved" : "Save the Place"}
                        </button>
                    </div>
                </div>
            </div></div>
    )
}

export default Page