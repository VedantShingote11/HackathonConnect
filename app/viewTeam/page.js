import React from 'react';
import Link from 'next/link';

const Card = () => {
    return (
        <>
        <Link href={"/teamDetails"}>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 w-80">
            <div className="flex flex-col space-y-4">
                <div className="teamName text-2xl font-bold text-blue-600">
                    Hackers
                </div>
                <div className="hackName text-gray-700">
                    Hackathon: <span className="font-medium">Vishwa 2.0</span>
                </div>
                <div className="leader text-gray-500">
                    Leader: <span className="font-medium">abc</span>
                </div>
            </div>
        </div></Link></>

    );
};

export default Card;
