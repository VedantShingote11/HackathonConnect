"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
    return (
        <div>
            <div className="bg-blue-600 text-white w-[20vw] h-[40vh] my-20 rounded-lg flex flex-col justify-center items-center gap-4 m-auto">
            <button
                    className="bg-white text-blue-600 w-44 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-100"
                    onClick={() => {
                        signIn("google" , { callbackUrl: "/" });
                    }}
                >
                    Google
                </button>
                <button
                    className="bg-white text-blue-600 w-44 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-100"
                    onClick={() => {
                        signIn("github" , { callbackUrl: "/" });
                    }}
                >
                    Github
                </button>
                <button
                    className="bg-white text-blue-600 w-44 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-100"
                >
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default Page;
