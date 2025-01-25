"use client"
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";


const Page = () => {

    const params = useSearchParams();
    const id = params.get("_id");
    const [data, setData] = useState([])

    useEffect(() => {

        const getData = async () => {

            try {
                const response = await fetch("/api/hackathonDetails", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch team data");
                }

                const allData = await response.json();

                const obj = allData.data.find((obj) => obj._id === id)

                console.log(obj)
                setData(obj);
                console.log(data)

            } catch (error) {
                console.error("Error fetching team details:", error);
            }
        }
        getData()
    }, [])

    useEffect(() => {
      
    }, [data])
    



    return (
        <div className="flex flex-col w-[60vw] m-auto bg-white shadow-lg rounded-lg p-6 mt-10 space-y-6">
            <p className="text-gray-700 leading-7">
                {data.description}
            </p>
            <div className="space-y-2">
                <span className="block text-lg font-medium text-gray-800">
                    Prize Pool: <span className="text-blue-600">$10,000</span>
                </span>
                <span className="block text-lg font-medium text-gray-800">
                    Venue: <span className="text-blue-600">New York City</span>
                </span>
                <span className="block text-lg font-medium text-gray-800">
                    Other: <span className="text-blue-600">Virtual & In-person</span>
                </span>
            </div>
            
            <a href={data.registrationLink}>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                Participate
            </button>
            </a>
        </div>
    );
};

export default Page;
