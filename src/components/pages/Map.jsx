import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const apiKey = "AIzaSyD9SeIxbk5Vq1LiU1BHQpK9u1rnzVfc0h8";

export default function GoogleMapLocation() {

const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey
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
