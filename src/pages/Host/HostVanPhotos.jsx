

import { useOutletContext } from 'react-router-dom';

export default function HostVanPhotos() {
    const { van } = useOutletContext();

    return (
        <div>
            <img src={van.imageUrl} alt="Van Photo" className='w-60' />
        </div>
    )
}