"use client"
import React, { useCallback } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    if (session) {
        return <>
            <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">

                <div className="text-lg font-semibold">
                    Platform Name
                </div>

                <div className="space-x-4">
                    <Link href={"/hackathons"}>
                    <button className="px-4 py-2 bg-white text-blue-600 font-medium rounded hover:bg-blue-100">
                        Hackathon
                    </button>
                    </Link>
                    <button className="px-4 py-2 bg-white text-blue-600 font-medium rounded hover:bg-blue-100">
                        My Team
                    </button>
                    <button className="px-4 py-2 bg-white text-blue-600 font-medium rounded hover:bg-blue-100">
                        Profile
                    </button>
                    <button onClick={()=>{signOut({ callbackUrl: "/" })}}className="px-4 py-2 bg-white text-blue-600 font-medium rounded hover:bg-blue-100">
                        Signout
                    </button>
                </div>
            </nav>

        </>
    }
    return (
        <>
            <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
                <div className="text-lg font-semibold">
                    Platform Name
                </div>

                <Link href={"/login"}>
                    <button className="px-4 py-2 bg-white text-blue-600 font-medium rounded hover:bg-blue-100">
                        Login
                    </button>
                </Link>

            </nav>

        </>
    )
}

export default Navbar