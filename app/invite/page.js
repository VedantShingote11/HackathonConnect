"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const params = useSearchParams();
  const email = params.get("email");

  const [notify, setNotify] = useState({
    name: "",
    senderId: "",
    receiverId: email || "",
    message: "",
    reqStatus:false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotify((prev) => ({ ...prev, [name]: value }));
  };

  const invite = async () => {

    try{
      const response = await fetch('/api/request',{
        method:"POST",
        body:JSON.stringify(notify),
      })

      if(!response.ok){
        console.log("Error while data adding");
      }
      else{
        {alert("invitation is send")}
      }

    }
    catch(error){
      console.log("Something went wrong")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Send Invitation</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={notify.name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="text"
          name="senderId"
          placeholder="Your ID"
          value={notify.senderId}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="text"
          name="receiverId"
          placeholder="Receiver ID"
          value={notify.receiverId}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          value={notify.message}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        ></textarea>
        <button
          onClick={invite}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Invite
        </button>
      </div>
    </div>
  );
};

export default Page;
