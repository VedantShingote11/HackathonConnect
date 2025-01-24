"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const teamDetails = () => {

    const params = useSearchParams();
    const [teamDetails, setTeamDetails] = useState(null);

    useEffect(() => {
        const id = params.get('id')
        const fetchTeamDetails = async () => {
            try {
                const response = await fetch("/api/submitDetails", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch team data");
                }

                const teams = await response.json();
                const team = teams.data.find((team) => team.id === id);
                setTeamDetails(team);
            } catch (error) {
                console.error("Error fetching team details:", error);
            }
        };

        fetchTeamDetails();
    }, []);

    // const handleEdit = async() => {
        
    //     await fetch("/api/submitDetails", {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         id:teamDetails.id,
    //     });


    // }
    

    if (!teamDetails) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-[90vw] md:w-[60vw] space-y-6">

                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-600">{teamDetails.hackathonName}</h1>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Description</h2>
                    <p className="text-gray-700">
                        <strong>Problem Statement:</strong>{teamDetails.problemStatement}
                    </p>
                    <p className="text-gray-700">
                        <strong>Details:</strong> {teamDetails.details}
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Team Leader</h2>
                    <p className="text-gray-700">{teamDetails.teamLeader}</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800">Team Members</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>{teamDetails.teamMembers[0]}</li>
                        <li>{teamDetails.teamMembers[1]}</li>
                        <li>{teamDetails.teamMembers[2]}</li>
                        <li>{teamDetails.teamMembers[3]}</li>
                        <li>{teamDetails.teamMembers[4]}</li>
                    </ul>
                </div>

                <Link href={"/teamForm"}>
                    <button className="mx-64 w-40 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition mt-3 duration-200">
                        Edit
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default teamDetails