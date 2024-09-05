import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'

export default function Example() {

    const navItems = [
        { name: 'About', link: '/about' },
        { name: 'Vans', link: '/vans' },
        { name: 'Host', link: '/host' }
    ]

    const navItemElements = navItems.map((item, index) => (
        <Link key={index} to={item.link} className='text-2xl font-medium'>{item.name}</Link>
    ))

    return (
        <Disclosure as="nav" className="flex items-center h-28">
            <div className='flex w-full px-4'>
                <div className='w-1/2'>
                    <Link to='/' className='text-2xl font-black'>#VANLIFE</Link>
                </div>
                <div className='w-1/2 flex justify-end space-x-10'>
                    {navItemElements}
                </div>
            </div>
        </Disclosure>
    )
}
