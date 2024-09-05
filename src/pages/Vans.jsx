import { useState, useEffect } from "react"
import VanRental from "../components/van/VanElement"

import '../server'

export default function Vans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, [])

    // map over the vans array and render a VanRental component for each van
    // pass the van object as a prop to the VanRental component
    const vanElements = vans.map(van => <VanRental key={van.id} item={van} />)

    return (
        <div>
            <h1 className="text-4xl font-bold pb-4">Product Information</h1>
            <div className=" grid grid-cols-2 gap-6 flex-wrap justify-center">
                {vanElements}
            </div>
        </div>
    )
}