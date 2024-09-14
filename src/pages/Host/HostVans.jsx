import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../utils/api'
import Card from '../../components/host/Card'

export function loader() {
    return getHostVans()
}

export default function Vans() {
    // Use the useLoaderData hook to get the data that was loaded by the loader
    const vans = useLoaderData()

// Create a new array of Card components using the data that was loaded
    const vanElement = vans.map((van, index) => <Card key={index} item={van} />)

    return (
        <div>
            <div className='py-12'>
                <h1 className="text-4xl font-bold">Your listed vans</h1>
            </div>
            <div className='space-y-4'>
                {vanElement}
            </div>
        </div>
    )
}
