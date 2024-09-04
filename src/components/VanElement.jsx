export default function VanRental(props) {

    console.log(props)
    
    const getColorByType = (type) => {
        switch (type) {
            case 'simple':
                return 'orange';
            case 'rugged':
                return 'gray';
            case 'luxury':
                return 'blue';
            default:
                return 'gray';
        }
    };

    const colorClass = getColorByType(props.item.type);

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
                <p className={`py-2.5 px-6 w-fit text-md bg-${colorClass}-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-300 hover:bg-${colorClass}-700`}>{props.item.type}</p>
            </div>
        </div>
    )
}