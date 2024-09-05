import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

export default function VanDetail() {
    const params = useParams();
    const [van, setVan] = useState({});

    console.log(params);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans));
    }, [params.id]);

    console.log(van);

    return (
        <div className="space-y-4">
            <Link to="/vans" className="flex">
                <ArrowLeftIcon className="w-4" /><span className="underline underline-offset-4">Back to all vans</span>
            </Link>
            <div className="space-y-4">
                <div className="">
                    <img src={van.imageUrl} alt={`Image of ${van.name}`} className="" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl font-medium">{van.name}</h1>
                    <h2 className="text-lg">
                        <span className="font-medium">${van.price}</span>/day
                    </h2>
                    <p>{van.description}</p>
                    <p className={`py-2.5 px-6 w-full text-md bg-amber-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-300 hover:bg-amber-700`}>Rent this van</p>
                </div>
            </div>
        </div>
    );
}
