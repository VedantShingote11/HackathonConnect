import React from 'react'

const teamDetails = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-[90vw] md:w-[60vw] space-y-6">

                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-600">Hackathon Name</h1>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Description</h2>
                    <p className="text-gray-700">
                        <strong>Problem Statement:</strong> Build a platform that connects developers to hackathons.
                    </p>
                    <p className="text-gray-700">
                        <strong>Details:</strong> The project should allow users to join teams, manage tasks, and submit their solutions seamlessly.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Team Leader</h2>
                    <p className="text-gray-700">John Doe</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800">Team Members</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Jane Smith</li>
                        <li>Robert Brown</li>
                        <li>Emily White</li>
                        <li>Michael Green</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default teamDetails