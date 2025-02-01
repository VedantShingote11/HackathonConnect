"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const page = () => {

    const [query, setQuery] = useState('')
    const [data, setData] = useState([])

    const handleSearch = async (query) => {

        if(query.length == 0) return;
        try {

            const response = await fetch(`/api/userInfo?query=${query}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                console.log("Error in fetching data")
            }
            const userData = await response.json();
            
            setData(userData.result);
        }
        catch (error) {
            console.log("Something went wrong");
        }
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='h-[70vh] p-6'>
            <div className='searchBar flex items-center gap-5 w-[60vw] m-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white'>
                <input
                    className='rounded-full border border-black p-3 w-[50vw] focus:outline-none focus:ring-2 focus:ring-blue-400'
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Search by name...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={() => handleSearch(query)} className='px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition'>
                    Search
                </button>
            </div>
            <div className='result flex flex-col gap-4 m-auto w-[60vw] mt-6 p-4 border border-gray-300 rounded-lg shadow-md bg-white'>
                {data.length == 0 && <div>No data found</div>}
                {data.length > 0 && data.map((item , index)=>{
                    return <div key={index} className='temp flex items-center justify-between gap-10 p-4 border-b border-gray-200'>
                    <div className='detail flex flex-col gap-2'>
                        <div className='name font-semibold text-lg'>{item.name}</div>
                        <div className='college text-sm text-gray-600'>{item.college}</div>
                    </div>
                    <div className="personalDetails flex flex-col gap-2">
                        <div className='email text-gray-700 text-sm'>{item.email}</div>
                        <div className="domain">{item.domain}</div>
                    </div>
                    <div className='btns flex items-center gap-2'>
                        <button className='px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition'>
                            View Profile
                        </button>
                        <Link href={{
                            pathname:"/invite",
                            query:{email:item.email}
                        }}><button className='px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition'>Invite</button></Link>
                    </div>
                </div>
                })}

            </div>

        </div>
    )
}

export default page