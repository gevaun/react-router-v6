import { useState, useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

export default function HostVanDetails() {

    const params = useParams();
    const [van, setVan] = useState({});

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans));
    }, [params.id]);

    const vanDetailsElement = (
        <div className="space-y-2">
            <p><span className="font-medium">Name:</span> {van.name}</p>
            <p><span className="font-medium">Category:</span> {van.type}</p>
            <p><span className="font-medium">Description:</span> {van.description}</p>
            <p><span className="font-medium">Visibility:</span> ${van.price}/day</p>
        </div>
    )
    
    const vanPricingElement = (
        <div className="space-y-2">
            <p><span className="font-medium">Price:</span> ${van.price}/day</p>
        </div>
    )
    
    const vanPhotosElement = (
        <div className="space-y-2">
            <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        </div>
    )

    return (
        <div className="space-y-4">
            <Link to=".." relative='path' className="flex w-fit py-12">
                <ArrowLeftIcon className="w-4" /><span className="underline underline-offset-4">Back to all vans</span>
            </Link>
            <div className="space-y-4 p-12 border border-cunrrent rounded-lg">
                <div className="flex">
                    <div className="">
                        <img
                            src={van.imageUrl}
                            alt={`Image of ${van.name}`}
                            className="w-1/2"
                        />
                    </div>
                    <div className="space-y-4">
                        <p className={`py-2.5 px-6 w-fit text-md bg-amber-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-300 hover:bg-amber-700`}>{van.type}</p>
                        <h1 className="text-2xl font-medium">{van.name}</h1>
                        <h2 className="text-lg">
                            <span className="font-medium">${van.price}</span>/day
                        </h2>
                    </div>
                </div>
                <div className="flex">
                    Details
                    Pricing
                    Photos
                    
                </div>
                <div className="space-y-2">
                    {vanDetailsElement}
                </div>
            </div>
        </div>
    );
}