import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col w-[60vw] m-auto bg-white shadow-lg rounded-lg p-6 mt-10 space-y-6">
            <p className="text-gray-700 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quasi voluptas ut sint a dolor cumque eius omnis? Distinctio repudiandae laboriosam ipsum vero minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quasi sint assumenda molestiae molestias, accusantium cupiditate aliquid facilis fuga modi aspernatur voluptatem, atque a officiis consequuntur tempora ipsum? Commodi, atque! lorem100
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
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                Participate
            </button>
        </div>
    );
};

export default Page;
