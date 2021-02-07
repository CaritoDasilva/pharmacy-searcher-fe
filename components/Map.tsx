import React, { CSSProperties, useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PharmacyDetail from './Dialogs/PharmacyDetail'
import { ILocation, IMapProps, IPharmacy } from '../interfaces'

const MySwal = withReactContent(Swal)

const Map = (data: IMapProps) => {
    const { location, markers } = data;
    const [defaultCenter, setDefaultCenter] = useState<ILocation>({ lat: -33.487576, lng: -70.6064527 })
    const mapStyles: CSSProperties = {
        overflow: 'hidden',
        height: '520px',
        width: '100%',
        position: 'absolute',
        top: '27%',
        left: '0'
    }


    useEffect(() => {
        if (location.lat && location.lng) {
            setDefaultCenter(location)
        }
    }, [data])

    const onCloseModal = () => {
        MySwal.close()
    }

    const openModal = (local: IPharmacy) => {
        MySwal.fire({
            html: (<PharmacyDetail localDetail={local} onClose={onCloseModal} />),
            allowOutsideClick: false,
            showConfirmButton: false
        })
    }

    return (
        <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
                clickableIcons={true}
            >
                {markers && markers.length > 0 ? markers.map((marker, i) => {
                    return (
                        <Marker key={i} position={{ lat: Number(marker.local_lat), lng: Number(marker.local_lng) }} clickable={true} onClick={() => { openModal(marker) }} />
                    )
                }) : <Marker position={defaultCenter} />}
            </GoogleMap>
        </LoadScript>
    )

}

export default Map;