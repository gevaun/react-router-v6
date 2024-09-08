import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

export default function HostVanDetails() {

    const params = useParams();
    const [van, setVan] = useState({});

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans));
    }, [params.id]);

    const navItems = [
        { name: 'Details', link: '' },
        { name: 'Pricing', link: 'pricing' },
        { name: 'Photos', link: 'photos' }
    ]

    const navItemElements = navItems.map((item, index) => (
        <NavLink
            key={index}
            to={item.link}
            end
            className={({ isActive }) => isActive ? 'font-bold underline underline-offset-4' : ""}
        >
            {item.name}
        </NavLink>
    ))

    return (
        <div className="space-y-4">
            <Link to=".." relative='path' className="flex w-fit py-12">
                <ArrowLeftIcon className="w-4" /><span className="hover:underline underline-offset-4">Back to all vans</span>
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
                <div className="flex space-x-10 text-md">
                    {navItemElements}
                </div>
                <div className="space-y-2">
                    <Outlet
                        context={{van}}
                    />
                </div>
            </div>
        </div>
    );
}