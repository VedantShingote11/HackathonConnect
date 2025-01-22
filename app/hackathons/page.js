import React from 'react'
import Card from '@/components/Card'
import Link from 'next/link'

const page = () => {
  return (
    <div className='main h-full flex flex-wrap justify-center gap-10'>
        <Link href={"/details"}><Card/></Link>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default page