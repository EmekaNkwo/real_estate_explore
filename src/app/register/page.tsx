import { DocumentHeader } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { SyntheticEvent, useState } from 'react'

const Page = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setError("")
        setIsLoading(true);
        const formData = new FormData(e.target as HTMLFormElement);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        // try {
        //     const res = await apiRequest.post("/auth/register", {
        //         username,
        //         email,
        //         password,
        //     });

        //     navigate("/login");
        // } catch (err) {
        //     setError(err.response.data.message);
        // } finally {
        //     setIsLoading(false);
        // }
    };
    return (
        <DocumentHeader title="Register Account">
            <div><div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="email" type="text" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button disabled={isLoading}>Register</button>
                    {error && <span>{error}</span>}
                    <Link href="/login">Do you have an account?</Link>
                </form>
            </div>
                <div className="imgContainer">
                    <Image src="/bg.png" alt="" />
                </div></div>
        </DocumentHeader>

    )
}

export default Page