import React from 'react'

const Card = () => {
  return (
    <>
    <div className="cursor-pointer flex flex-col justify-center min-w-sm w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 gap-5 my-6">
                <img
                    src="https://via.placeholder.com/400x200"
                    alt="Hackathon Image"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Hackathon Name
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                        <span className="font-semibold">Date:</span> 25th January 2025
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                        <span className="font-semibold">Mode:</span> Online
                    </p>

                    <p className="text-gray-600 text-sm mt-1">
                        <span className="font-semibold">Fees:</span> Free
                    </p>
                </div>
            </div>
    </>
  )
}

export default Card