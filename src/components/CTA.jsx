import { Link } from 'react-router-dom';
import { ArrowRightIcon } from "@heroicons/react/16/solid"

export default function Example(prop) {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-amber-700 to-orange-600 flex items-center justify-between flex-col lg:flex-row">
                    <div className="block text-center mb-5 lg:text-left lg:mb-0">
                        <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
                            {prop.title}
                        </h2>
                        <p className="text-xl text-indigo-100">
                        {prop.lineOne}
                        </p>
                    </div>
                    <Link to={prop.link} className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-yellow-900 font-semibold py-4 px-8 transition-all duration-500">
                        Get In Touch
                        <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
