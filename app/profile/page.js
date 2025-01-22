import React from 'react';

const page = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-[90vw] md:w-[60vw] space-y-6">
                
                <div className="flex justify-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-blue-600"
                    />
                </div>

                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-bold text-gray-800">Name</h1>
                    <p className="text-gray-600">name@gmail.com</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Skill Set</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-blue-600">College Name</h2>
                    <p className="text-gray-700">ABC Institute of Technology</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Achievements</h2>
                    <ul className="list-decimal list-inside text-gray-700">
                        <li>Won 1st place in Hackathon 2023</li>
                        <li>Published a research paper on AI in healthcare</li>
                        <li>Completed a full-stack development internship</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;
