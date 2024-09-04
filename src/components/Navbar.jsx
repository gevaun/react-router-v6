import { Link } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'



export default function Example() {
    return (
        <Disclosure as="nav" className="flex items-center h-28 mb-6">
            <div className='flex w-full px-4'> 
                <div className='w-1/2'>
                    <Link to='/' className='text-2xl font-black'>#VANLIFE</Link>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <Link to={'/about'} className='text-2xl font-medium'>About</Link>
                </div>
            </div>
        </Disclosure>
    )
}
