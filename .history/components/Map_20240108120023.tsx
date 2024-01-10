import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Map = () => {
    return (
        <MapContainer 
        style={{height: "100vh"}}
        center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={false}
        >


        </MapContainer>

    )
}

export default Map;