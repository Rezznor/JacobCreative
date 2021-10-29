import { useState, useEffect } from 'react';
import MapGL from 'mapbox-gl'


export default function ContactMap() {
    
    const [pageIsMounted, setPageIsMounted] = useState(false)
    
    MapGL.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    
    useEffect(() => {
        setPageIsMounted(true)
        const map = new MapGL.Map({
            container: 'mapbox-container',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-80.4788, 43.4226],
            zoom: 10.3,
            interactive: false,
            
        })
    }, [])
    
    return (
        
        <div className='flex w-full bg-gray-100 h-full'>
            <div style={{height: '30vh', width: '100vw'}} id='mapbox-container'></div>
        </div>
        
    )
}
