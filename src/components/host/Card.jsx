import { NavLink } from "react-router-dom";

export default function Card(props) {
    return (
        <div className="">
            <NavLink to={`${props.item.id}`} className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" >
                <div className="relative flex items-center overflow-hidden">
                    <img 
                        className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                        src={props.item.imageUrl} 
                        alt="Blog Image" 
                    />
                    <div className="grow p-4 ms-32 sm:ms-48">
                        <div className="min-h-24 flex flex-col justify-center">
                            <h3 className="font-semibold  text-2xl text-gray-800 dark:text-neutral-300">
                                {props.item.name}
                            </h3>
                            <p className="mt-1 text-gray-500 dark:text-neutral-500">
                                ${props.item.price}/day
                            </p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}