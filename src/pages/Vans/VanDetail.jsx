import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVan } from "../../utils/api";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

export async function loader({ params }) {
  return getVan(params.id);
}

export default function VanDetail() {
  // Use the useLoaderData hook to get the data that was loaded by the loader
  const van = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="space-y-4">
      <Link to={`..${search}`} relative="path" className="flex w-fit">
        <ArrowLeftIcon className="w-4" />
        <span className="underline underline-offset-4">{`Back to ${type} vans`}</span>
      </Link>
      <div className="space-y-4">
        <div className="">
          <img src={van.imageUrl} alt={`Image of ${van.name}`} className="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">{van.name}</h1>
          <h2 className="text-lg">
            <span className="font-medium">${van.price}</span>/day
          </h2>
          <p
            className={`py-2.5 px-6 w-fit text-md bg-amber-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-300 hover:bg-amber-700`}
          >
            {van.type}
          </p>
          <p>{van.description}</p>
          <p
            className={`py-2.5 px-6 w-full text-md bg-amber-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-300 hover:bg-amber-700`}
          >
            Rent this van
          </p>
        </div>
      </div>
    </div>
  );
}
