"use client";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


const Template = ({ children }: { children: React.ReactNode }) => {
    const { push } = useRouter();

    let loggedIn = false
    useEffect(() => {
        if (loggedIn) {
            push("")
            return;
        }
    }, [loggedIn]);
    return (
        <div className="h-screen lg:max-w-[1366px] md:max-w-[1280px] sm:max-w-[768px] max-w-[640px] mx-auto px-[20px] flex flex-col  ">
            <Navbar />
            <div className="h-[calc(100vh - 100px)]">
                {children}
            </div>

        </div>
    );
};

export default Template;
