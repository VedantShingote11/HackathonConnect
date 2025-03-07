"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const Card = () => {

    const [teamData, setTeamData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('/api/submitDetails', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch team data');
                }

                const teams = await response.json();

                setTeamData(teams.data);

            } catch (error) {
                console.error('Error fetching team data:', error);
            }
        };

        fetchData();
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await fetch("/api/submitDetails", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            if (!response.ok) {
                throw new Error("Failed to delete the team.");
            }

            setTeamData((prevData) => prevData.filter((item) => item.id !== id));
        }
        catch (error) {
            console.error("Error deleting team:", error);
            alert("An error occurred while trying to delete the team. Please try again.");
        }
    }


    return (
        <>
            <div className="h-full flex items-center justify-center gap-4">

                <div className="teamName bg-white shadow-lg rounded-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300 w-[60vw] h-full flex flex-wrap gap-4 p-9 overflow-y-auto">
                    {teamData.length === 0 && <div>Create team</div>}
                    {teamData.length != 0 && teamData.map((item, index) => {
                        return <div key={index} className=" relative flex flex-col justify-center space-y-4 border border-gray-200 w-[25vw] h-44">
                            <div>
                                <div className="teamName text-2xl font-bold text-blue-600">
                                    {item.teamName}
                                </div>
                                <div onClick={() => handleDelete(item.id)} className="delete cursor-pointer absolute top-4 right-4">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/skkahier.json"
                                        trigger="hover"
                                        style={{ "width": "27px", "height": "27px" }}>
                                    </lord-icon>
                                </div>
                            </div>
                            <div className="hackName text-gray-700">
                                Hackathon: <span className="font-medium">{item.hackathonName}</span>
                            </div>
                            <div className="leader text-gray-500">
                                Leader: <span className="font-medium">{item.teamLeader}</span>
                            </div>
                            <div className="chat">
                                <Link href={`/group/${item.teamName}`}>
                                    <button className="w-28 bg-blue-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-3 duration-200">
                                        Chat
                                    </button>
                                </Link>
                            </div>
                            <Link href={{ pathname: "/teamDetails", query: { id: item.id } }}>
                                <div className="next absolute bottom-1 right-5">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/whtfgdfm.json"
                                        trigger="hover"
                                        style={{ "width": "27px", "height": "27px" }}>
                                    </lord-icon>
                                </div>
                            </Link>
                        </div>
                    })}

                </div>
                <div className="btn h-full">
                    <Link href={{ pathname: "/teamForm", query: { _id: "notEdit" } }}>
                        <button className="w-40 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition mt-3 duration-200">
                            Create
                        </button>
                    </Link>
                </div>
            </div>
        </>

    );
};

export default Card;
