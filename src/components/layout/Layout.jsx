
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto max-w-7xl px-4 py-6">
                <Outlet />
            </div>
        </div>
    )
}