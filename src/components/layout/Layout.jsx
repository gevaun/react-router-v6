import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "../Footer"

export default function Layout() {
    return (
        <div className="bg-amber-50 dark:bg-zinc-900 dark:text-white min-h-screen flex flex-col">
            <Navbar />
            <div className="container mx-auto max-w-7xl px-4 py-6 flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}