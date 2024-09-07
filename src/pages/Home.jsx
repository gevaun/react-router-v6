import { Link } from 'react-router-dom';
import HomeHero from '../assets/images/home-hero.png';

export default function Home() {
    return (
            <div className='relative'>
                <img src={HomeHero} alt="Home Hero" className='rounded-lg'/>
                <div className='absolute top-2 left-0 text-white p-12'>
                    <h1 className='text-6xl font-bold py-6'>You got the travel plans, we got the travel vans.</h1>
                    <p className='text-2xl py-6'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <div className='flex justify-center'>
                        <Link to="/vans" className='flex w-2/3 justify-center rounded bg-gradient-to-r from-amber-700 to-orange-600 py-2 px-4 text-lg text-white'>Find your van</Link>
                    </div>
                </div>
            </div>
    )
}