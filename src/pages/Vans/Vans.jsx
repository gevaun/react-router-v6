import { useState, useEffect } from "react"
import { NavLink, useSearchParams } from "react-router-dom"
import VanRental from "../../components/van/VanElement"

import '../../server'

export default function Vans() {

    let [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, [])

    // extract .type from all the vans in the array
    const vanTypesElements = vans.map(
        van => (
            <button 
                onClick={() => setSearchParams({type: van.type})}
                key={van.id} 
                className='py-2.5 px-6 text-sm bg-amber-300 text-slate-700 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500'
            >{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</button> 
            // <NavLink 
            //     to={`.?type=${van.type}`}
            //     key={van.id} 
            //     className='py-2.5 px-6 text-sm bg-amber-300 text-slate-700 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500'
            // >
            //     {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
            // </NavLink>
        )
    )

    const typeFilter = searchParams.get('type')
    console.log(typeFilter)

    // map over the vans array and render a VanRental component for each van
    // pass the van object as a prop to the VanRental component
    const filteredVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans
        
    const vanElements = filteredVans
        .map(van => <VanRental key={van.id} item={van} />)

    return (
        <div>
            <div className="">
                <h1 className="text-4xl font-bold pb-4">Explore our van options</h1>
            </div>
            <div className="space-x-10 py-8">
                {vanTypesElements}
                <NavLink to="." className=''>Clear Filters</NavLink>
            </div>
            <div className=" grid grid-cols-2 gap-6 flex-wrap justify-center">
                {vanElements}
            </div>
        </div>
    )
}