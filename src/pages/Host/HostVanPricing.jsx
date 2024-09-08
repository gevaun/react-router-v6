import { useOutletContext } from "react-router-dom"


export default function HostVanPricing() {
    const { van } = useOutletContext()

    return (
        <div>
            <p><span className="text-2xl font-medium">${van.price}</span>/day</p>
        </div>
    )

}