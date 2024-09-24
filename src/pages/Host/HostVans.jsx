import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../utils/api";
import { requireAuth } from "../../utils/utils";
import Card from "../../components/host/Card";

export async function loader({ request }) {
    await requireAuth(request);
    return defer({ vans: getHostVans() });
}

export default function Vans() {
  // Use the useLoaderData hook to get the data that was loaded by the loader
  const dataPromise = useLoaderData();

  // Create a new array of Card components using the data that was loaded
  function renderVanElements(vans) {
    const vanElements = vans.map((van) => <Card key={van.id} item={van} />);

    return (
      <div className="space-y-4">{vanElements}</div>
    )
  }
  // const vanElement = vans.map((van, index) => <Card key={index} item={van} />);

  return (
    <div>
      <div className="py-12">
        <h1 className="text-4xl font-bold">Your listed vans</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={dataPromise.vans}>
          {renderVanElements}
        </Await>
      </Suspense>
      
    </div>
  );
}
