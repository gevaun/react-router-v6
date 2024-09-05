import { Link } from 'react-router-dom';
import AboutHero from '../assets/images/about-hero.png';
import CTA from '../components/van/CTA';

export default function About() {
    return (
        <div>
            <div className='flex w-full justify-center '>
                <img src={AboutHero} alt="About Hero" />
            </div>
            <div className="">
                <h1 className='text-6xl font-bold py-6'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className='py-2'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className='py-2'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <CTA
                title="Your destination is waiting."
                lineOne="Your van is ready."
                link="/Van"
            />
        </div>
    )
}
