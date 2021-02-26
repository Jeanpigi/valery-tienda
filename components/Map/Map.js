import React from 'react';
//Google API
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapStyle = {
        height: '50vh',
        width: '100%'
    }

    const center = {
        lat: 1.6138136,
        lng: -75.6150687
    }

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY} region="colombia">
            <GoogleMap
                mapContainerStyle={mapStyle}
                zoom={9}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;