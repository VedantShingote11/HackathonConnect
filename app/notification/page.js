"use client"
import React, { useState, useEffect } from 'react'

const page = () => {

  const [invitation, setInvitation] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const userData = await fetch('/api/userData', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const e = await userData.json();
        const email = e.email;

        const allData = await fetch(`/api/request?email=${email}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        if(!allData.ok){
          console.log("No notification found")
        }

        const data = await allData.json();
        setInvitation(data.data);
      }
      catch (error) {
        console.log("Error occurred in fetching notification ")
      }
    }

    fetchNotifications()
  }, [])

  return (
    <div>
      <div className="temp flex flex-col">
      {invitation.length == 0 && <div>No notification received</div>}
      {invitation.length > 0 && invitation.map((item , index)=>{
        return <div key={index} className="bg-gray-100 shadow-md m-auto rounded-lg p-6 w-full max-w-md mt-6">
        <p><strong>From:</strong> {item.name} ({item.senderId})</p>
        <p><strong>To:</strong> {item.receiverId}</p>
        <p><strong>Message:</strong> {item.message}</p>
        <button
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-4"
        >
          Accept
        </button>
      </div>
      })}
      </div>
    </div>
  )
}

export default page