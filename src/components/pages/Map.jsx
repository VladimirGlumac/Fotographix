import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

export default function GoogleMapLocation() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.VITE_GOOGLE_MAPS_API_KEY
    });
    if (!isLoaded) return <div><p>Loading...</p></div>

    return <Map />


}

function Map() {
    const center = useMemo(() => ({ lat: 42.440998236, lng: -73.652664056 }), [])
    return <GoogleMap zoom={12} center={center} mapContainerClassName='map-container'>
        <Marker position={center} />
    </GoogleMap>
}
