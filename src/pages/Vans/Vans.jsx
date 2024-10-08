import { useState, Suspense } from "react";
import {
  NavLink,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import VanRental from "../../components/van/VanElement";
import { getVans } from "../../utils/api";

import "../../server";

export function loader() {
  return defer({ vans: getVans() });
}

export default function Vans() {
  let [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  // Handle error state
  // Extract the data from the loader
  // const vans = useLoaderData();
  const dataPromise = useLoaderData();

  function renderVanElements(vans) {
    // map over the vans array and render a VanRental component for each van
    // pass the van object as a prop to the VanRental component
    const filteredVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const vanElements = filteredVans.map((van) => (
      <VanRental key={van.id} item={van} />
    ));
    // Extract unique van types
    const uniqueVanTypes = [...new Set(vans.map((van) => van.type))];

    // Map over unique van types to create button elements
    const vanTypesButtonElements = uniqueVanTypes.map((type) => (
      <button
        onClick={() => handleFilterChange("type", type)}
        key={type}
        className={`py-2.5 px-6 text-sm bg-amber-300 text-slate-700 rounded-lg font-semibold text-center ${
          typeFilter === type ? "bg-amber-500" : "hover:bg-amber-500"
        }`}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    ));
    function handleFilterChange(key, value) {
      setSearchParams((prevParams) => {
        if (value === null) {
          prevParams.delete(key);
        } else {
          prevParams.set(key, value);
        }
        return prevParams;
      });
    }
    return (
      <>
        <div className="space-x-10 py-8">
          {vanTypesButtonElements}
          {typeFilter && (
            <NavLink to="." className="opacity-75 hover:opacity-100">
              Clear Filters
            </NavLink>
          )}
        </div>
        <div className=" grid grid-cols-2 gap-6 flex-wrap justify-center">
          {vanElements}
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="">
        <h1 className="text-4xl font-bold pb-4">Explore our van options</h1>
      </div>
      <Suspense fallback={<div>Loading Vans...</div>}>
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
}
