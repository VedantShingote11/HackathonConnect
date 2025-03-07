"use client"
import React, { useCallback } from 'react'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
// import { useUser } from '@clerk/nextjs'

const Navbar = () => {
    // const user = useUser();
    // console.log(user.user?.id);
    return (
        <>
            <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">

                <div className="text-lg font-semibold">
                    Platform Name
                </div>

                <div className="space-x-4 flex items-center">
                <Link href={"/search"}>
                        <button className=''>
                        <lord-icon
                                src="https://cdn.lordicon.com/fkdzyfle.json"
                                trigger="hover"
                                style={{ "width": "29px", "height": "29px" }}>
                            </lord-icon></button></Link>
                    <Link href={"/hackathons"}>
                        <button className="px-4 py-2 bg-white text-blue-600 font-medium rounded hover:bg-blue-100">
                            Hackathon
                        </button>
                    </Link>
                    <Link href={"/viewTeam"}><button className="px-4 py-2 bg-white text-blue-600 font-medium rounded hover:bg-blue-100">
                        View Team
                    </button></Link>
                    <UserButton/>
                </div>
            </nav>

        </>
    )
}

export default Navbar