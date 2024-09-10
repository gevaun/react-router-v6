import { Link, useSearchParams } from "react-router-dom";

export default function VanRental(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    
  return (
    <div className="w-96 space-y-4">
      <Link
        to={props.item.id}
        state={{ 
            search: `?${searchParams.toString()}`, 
            type: typeFilter
        }}
        aria-label={`View details for ${props.item.name}, 
                             priced at $${props.item.price} per day`}
      >
        <div className="">
          <img
            src={props.item.imageUrl}
            alt={`Image of ${props.item.name}`}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">{props.item.name}</h1>
          <h2 className="text-lg">
            <span className="font-medium">${props.item.price}</span>/day
          </h2>
          <p
            className={`py-2.5 px-4 w-fit text-md bg-amber-500 text-white rounded-lg font-semibold text-center`}
          >
            {props.item.type}
          </p>
        </div>
      </Link>
    </div>
  );
}
