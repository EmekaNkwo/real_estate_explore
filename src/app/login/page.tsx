"use client"

import { SyntheticEvent, useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { DocumentHeader } from "@/utils";

function Page() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        const formData = new FormData(e.target as HTMLFormElement);

        const username = formData.get("username");
        const password = formData.get("password");

        // try {
        //     const res = await apiRequest.post("/auth/login", {
        //         username,
        //         password,
        //     });

        //     updateUser(res.data)

        //     router.push("/");
        // } catch (err: Record<string, any>) {
        //     setError(err.response.data.message);
        // } finally {
        //     setIsLoading(false);
        // }
    };
    return (
        <DocumentHeader title="Login">
            <div className="login">
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <h1>Welcome back</h1>
                        <input
                            name="username"
                            required
                            minLength={3}
                            maxLength={20}
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                        />
                        <button disabled={isLoading}>Login</button>
                        {error && <span>{error}</span>}
                        <Link href="/register">{"Don't"} you have an account?</Link>
                    </form>
                </div>
                <div className="imgContainer">
                    <Image src="/bg.png" alt="" width={500} height={500} />
                </div>
            </div>
        </DocumentHeader>
    );
}

export default Page;
