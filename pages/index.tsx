import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import useGoogleAddress from '../hooks/newGoogleAddres'
// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import PharmacyService from './api/pharmacy_service'
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// import ReactMapboxGl, { Layer, Feature, MapContext } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import { MapboxEvent } from 'mapbox-gl'
import Map from '../components/Map';


const IndexPage = () => {

  // const { google } = props;
  // const Map = ReactMapboxGl({
  //   accessToken:
  //     'pk.eyJ1IjoiY2FyaXRvZGFzaWx2YSIsImEiOiJja2txM2t6b3oxcWRmMnZwcnNyZHhyaGk4In0.ReEvOO08eA0kqKw9NAzgqQ'
  // });
  // const mapStyles = {
  //   width: '100%',
  //   height: '100%'
  // };
  // const [viewport, setViewport] = useState({
  //   width: "100%",
  //   height: "100%",
  //   // The latitude and longitude of the center of London
  //   latitude: coordinates.lat,
  //   longitude: coordinates.long,
  //   zoom: 10
  // });
  const location = useGoogleAddress('Pedro de Valdivia 6923')
  const pharmacy_service = new PharmacyService()
  const [pharmacys, setPharmacys] = useState([])
  const [coordinates, setCoordinates] = useState<any>({})
  const [loader, setLoader] = useState<boolean>(true)
  useEffect(() => {
    getPharmacyFromServices()
    getUserLocation()
  }, [])

  useEffect(() => {
    // console.log("🚀 ~ file: index.tsx ~ line 25 ~ useEffect ~ coordinates", coordinates)
    setLoader(false)
    // const map = new mapboxgl.Map({
    //   container: 'map',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center: [0, 0],
    // });
    // map.addControl(
    //   new mapboxgl.GeolocateControl({
    //     positionOptions: {
    //       enableHighAccuracy: true,
    //     },
    //     trackUserLocation: true,
    //   })
    // );
    // setLoader(true)

    // if(coordinates.length > 0) {
    //   // map.on('load', function () {
    //   //   map.flyTo({
    //   //     center: coordinates,
    //   //     essential: true // this animation is considered essential with respect to prefers-reduced-motion
    //   //   });
    //   // })
    // }



  }, [coordinates])

  const getPharmacyFromServices = async () => {
    try {
      let results = await pharmacy_service.getPharmacys()
      if (results) {
        setPharmacys(results.pharmacy)
        console.log("🚀 ~ file: index.tsx ~ line 31 ~ getPharmacyFromServices ~ results", results)

      }

    }
    catch (error) {

    }
  }

  const getUserLocation = () => {
    // navigator.geolocation.getCurrentPosition(showPosition)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      // x.innerHTML = "Geolocation is not supported by this browser.";
    }
    // if (navigator.geolocation) {
    //   console.log("🚀 ~ file: index.tsx ~ line 51 ~ getUserLocation ~ navigator", navigator.geolocation.getCurrentPosition(showPosition))
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     setCoordinates([position?.coords?.latitude, position?.coords?.longitude]);
    //   });
    // }
  }

  function showPosition(position: any) {
    console.log("🚀 ~ file: index.tsx ~ line 60 ~ showPosition ~ position", position)
    setCoordinates({ lat: position.coords.latitude, long: position.coords.longitude })
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    // "<br>Longitude: " + position.coords.longitude;
  }


  // const accessToken = 'pk.eyJ1IjoiY2FyaXRvZGFzaWx2YSIsImEiOiJja2txM2t6b3oxcWRmMnZwcnNyZHhyaGk4In0.ReEvOO08eA0kqKw9NAzgqQ';
  return (

    <Layout title="Home | Next.js + TypeScript Example">
      <Head>
        {/* <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' /> */}

      </Head>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      {!loader && Object.values(coordinates).length > 0 && (
        <div>
          {/* <Map
            google={this.props.google}
            style={mapStyles}
            initialCenter={
              {
                lat: coordinates.lat,
                lng: coordinates.long
              }
            }
          /> */}
          <Map data={location} />
        </div>
        // <div id="map" style={{ height: 500, width: 500 }}></div>
        // <Map
        //   style="mapbox://styles/mapbox/streets-v9"
        //   containerStyle={{
        //     height: '100vh',
        //     width: '100vw'
        //   }}
        //   zoom={[13]}
        //   movingMethod={'flyTo'}
        // >
        //   <MapContext.Consumer>
        //     {(map) => {
        //       map?.flyTo({
        //         center: coordinates,
        //         essential: true // this animation is considered essential with respect to prefers-reduced-motion
        //       })
        //       map.addControl(
        //         Map.GeolocateControl({
        //           positionOptions: {
        //             enableHighAccuracy: true,
        //           },
        //           trackUserLocation: true,
        //         })
        //       );
        //     }}
        //   </MapContext.Consumer>
        //   <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        //     <Feature coordinates={coordinates} />
        //   </Layer>
        // </Map>

      )
      }
    </Layout >

  )
}

export default IndexPage;
