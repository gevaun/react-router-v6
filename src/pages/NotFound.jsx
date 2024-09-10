import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-[50rem] flex flex-col mx-auto size-full">
      <main id="content">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
            404
          </h1>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Sorry, we couldn't find your page.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              <ChevronLeftIcon className="h-5 w-5" />
              Back to examples
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
