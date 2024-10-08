import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {

    const navItems = [
        { name: 'Dashboard', link: '' },
        { name: 'Income', link: 'income' },
        { name: 'Vans', link: 'vans' },
        { name: 'Reviews', link: 'reviews' }
    ]

    const navItemElements = navItems.map((item, index) => (
        <NavLink
            key={index}
            to={item.link}
            end
            className={({ isActive }) => isActive ? 'text-lg font-bold underline underline-offset-4' : 'text-lg opacity-75 transition-all duration-200 hover:opacity-100'}
        >
            {item.name}
        </NavLink>
    ))

    return (
        <>
            <div className='w-1/2 flex space-x-10'>
                {navItemElements}
            </div>
            <Outlet />
        </>
    )
}