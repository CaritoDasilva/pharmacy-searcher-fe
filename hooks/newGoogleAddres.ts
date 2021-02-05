import { useEffect, useState } from 'react'
import axios from 'axios'


const useGoogleAddress = address => {
    console.log("🚀 ~ file: newGoogleAddres.ts ~ line 6 ~ address", address)
    const [map, setMap] = useState({})
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCA17zPndKdFUMacIBucG085mrEbAXr4sE`

    useEffect(async () => {
        const response = await axios(API)
        console.log("🚀 ~ file: newGoogleAddres.ts ~ line 12 ~ useEffect ~ response", response)

        setMap(response.data.results[0].geometry.location)
    }, [])
    return map;
}

export default useGoogleAddress;