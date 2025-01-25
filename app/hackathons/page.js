"use client"
import Card from '@/components/Card'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const page = () => {

  const [cards, setCards] = useState([]);

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

        const result = await response.json();

        if (Array.isArray(result.data)) {
          setCards(result.data);
        } else {
          console.error("Expected data to be an array, got:", result.data);
        }

      } catch (error) {
        console.error("Error fetching team details:", error);
      }
    }

    getData();

  }, [])

  useEffect(() => {
    console.log(cards)
  }, [cards])
  


  return (
    <div className="main h-full flex flex-wrap items-center justify-center gap-10">
      {cards.map((item, index) => (
        <Link key={index} href={{pathname:"/hackathons/details" , query:{_id:item._id}}}>
          <Card {...item} />
        </Link>
      ))}
    </div>
  )
}

export default page