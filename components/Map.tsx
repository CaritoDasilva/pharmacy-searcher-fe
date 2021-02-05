import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'


const Map = (data) => {
    console.log("🚀 ~ file: Map.tsx ~ line 6 ~ Map ~ data", data)
    const [defaultCenter, setDefaultCenter] = useState({ lat: -33.487576, lng: -70.6064527 })
    const mapStyles = {
        height: '50vh',
        width: '100%'
    }
    useEffect(() => {
        if (data.lat && data.lng) {
            setDefaultCenter({
                lat: data.lat,
                lng: data.lng
            })

        }

    }, [data])
    console.log("🚀 ~ file: Map.tsx ~ line 17 ~ Map ~ defaultCenter", defaultCenter)

    return (
        <LoadScript googleMapsApiKey='AIzaSyCA17zPndKdFUMacIBucG085mrEbAXr4sE'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )

}

export default Map;