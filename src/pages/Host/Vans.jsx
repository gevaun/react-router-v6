import { useState, useEffect } from 'react'
import Card from '../../components/host/Card'

export default function Vans() {
    
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElement = vans.map((van, index) => <Card key={index} item={van} />)
    
    console.log(vans)

    return (
        <div>
            <div className='py-12'>
                <h1 className="text-4xl font-bold">Your listed van</h1>
            </div>
            <div className='space-y-4'>
                {vanElement}
            </div>
        </div>
    )
}
