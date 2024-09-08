import { useOutletContext } from "react-router-dom"


export default function HostVanInfo() {
    const { van } = useOutletContext()

    return (
        <div className="space-y-2">
            <p><span className="font-medium">Name:</span> {van.name}</p>
            <p><span className="font-medium">Category:</span> {van.type}</p>
            <p><span className="font-medium">Description:</span> {van.description}</p>
            <p><span className="font-medium">Visibility: </span> /day</p>
        </div>
    )
}