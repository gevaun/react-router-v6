import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export default function Error() {
    return (
        <div className="max-w-[50rem] flex flex-col mx-auto size-full">
            <header className="mb-auto flex justify-center z-50 w-full py-4">
                <nav className="px-4 sm:px-6 lg:px-8">
                    <a className="flex-none text-xl font-semibold sm:text-3xl dark:text-white" href="#" aria-label="Brand">VANLIFE</a>
                </nav>
            </header>

            <main id="content">
                <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                    <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">ERROR</h1>
                    <p className="mt-3 text-gray-600 dark:text-neutral-400">Oops, something went wrong.</p>
                    <p className="text-gray-600 dark:text-neutral-400">Sorry, we couldn't find your page.</p>
                    <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                        <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="../examples.html">
                            < ChevronLeftIcon className="w-4" />
                            Back to examples
                        </a>
                    </div>
                </div>
            </main>

            <footer className="mt-auto text-center py-5">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-gray-500 dark:text-neutral-500">© All Rights Reserved. 2022.</p>
                </div>
            </footer>
        </div>
    );
}