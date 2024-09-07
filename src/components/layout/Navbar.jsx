import { NavLink } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'

export default function Example() {

    const navItems = [
        { name: 'Host', link: '/host' },
        { name: 'About', link: '/about' },
        { name: 'Vans', link: '/vans' }
    ]

    const navItemElements = navItems.map((item, index) => (
        <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) => isActive ? 'text-2xl font-medium underline underline-offset-4' : 'text-2xl font-medium opacity-75 transition-all duration-200 hover:opacity-100'}
        >
            {item.name}
        </NavLink>
    ))

    return (
        <Disclosure as="nav" className="flex items-center h-28">
            <div className='flex w-full px-4'>
                <div className='w-1/2'>
                    <NavLink to='/' className='text-2xl font-black'>#VANLIFE</NavLink>
                </div>
                <div className='w-1/2 flex justify-end space-x-10'>
                    {navItemElements}
                </div>
            </div>
        </Disclosure>
    )
}
