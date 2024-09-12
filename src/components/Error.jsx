import { useRouteError, Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Footer from "./Footer";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <div className="max-w-[50rem] flex flex-col mx-auto">
        <header className="mb-auto flex justify-center z-50 w-full py-4">
          <nav className="px-4 sm:px-6 lg:px-8">
            <Link to="/" className="text-2xl font-black" aria-label="Brand">
              #VANLIFE
            </Link>
          </nav>
        </header>

        <main id="content">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
              ERROR
            </h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Oops, something went wrong.
            </p>
            <p className="text-gray-600 dark:text-neutral-400">
              {error.message}
            </p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <ChevronLeftIcon className="w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
