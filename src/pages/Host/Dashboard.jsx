import { Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <div>
            <h1 className="text-4xl font-bold flex w-fit py-12">Dashboard</h1>
            <Outlet />
        </div>
    )
}