import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'

const icon = L.icon({
    iconUrl: "/images/icon.png",
    iconSize: [50, 50],
    })

const polyline:[number, number][] = [
    [49.25299, -123.00600],
    [49.25980, -123.01400],
    [49.25299, -123.04400]
]

const redOptions = {color: 'red'}
const orangeOptions = {color: 'orange'}
const fillBlueOptions = {color: 'blue'}

const Map = () => {
    return (
        <MapContainer 
        style={{height: "100vh"}}
        center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={false}
        >
            <TileLayer 
                attribution='&copy; <a href="">By Sierra Laurent</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.24966, -123.00934]} icon={icon} >
                <Popup>
                    BCIT
                </Popup>
            </Marker>
            <Polyline pathOptions={redOptions} positions={polyline}/>
        </MapContainer>

    )
}

export default Map;