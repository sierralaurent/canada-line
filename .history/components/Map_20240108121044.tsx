import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'

const icon =L.icon({ iconUrl: "/images/icon.png" })

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
            <Marker position={[49.24966, -123.00934]} icon={icon}>
                <Popup>
                    BCIT
                </Popup>
            </Marker>
        </MapContainer>

    )
}

export default Map;