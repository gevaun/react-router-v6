import { Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <div>
            <h1 className="text-4xl font-bold pb-4">Dashboard</h1>
            <Outlet />
        </div>
    )
}