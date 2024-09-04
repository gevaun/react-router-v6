
export default function VanRental(props) {

    console.log(props)

    return (
        <div className="w-96 space-y-4">
            <div className="">
                <img src={props.item.imageUrl} alt={props.item.name} className="" />
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl font-medium">{props.item.name}</h1>
                <h2 className="text-lg">
                    <span className="font-medium">${props.item.price}</span>/day
                </h2>
                <p className="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700">{props.item.type}</p>
            </div>
        </div>
    )
}