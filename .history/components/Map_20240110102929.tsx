import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'

const icon = L.icon({
    iconUrl: "/images/icon.png",
    iconSize: [45, 45]
    })

const multiPolyline:[number, number][][] = [
    [
        // Waterfront
        [49.286657673017686, -123.11167716948354],
        // Vancouver City Centre
        [49.28341042418389, -123.11837196324363],
        // Yaletown-Roundhouse
        [49.27557135624098, -123.1218051908129],
        // Olympic Village
        [49.26717097214363, -123.11571121187743],
        // Broadway City hall
        [49.264149140482644, -123.11434122966189],
        // King Edward
        [49.25037530669903, -123.11640621745532],
        // Oakridge-42st Avenue
        [49.23471394323408, -123.11653519012727],
        // Langara-49th Avenue
        [49.22772366750822, -123.11666416279922],
        // Marine Drive
        [49.21820519607773, -123.11743799883097],
        // Bridgeport
        [49.196667554631865, -123.12618507891636],
        // Aberdeen
        [49.18411575076447, -123.13636310042726],
        // Lansdowne
        [49.17554417987126, -123.13608833475666],
        // Richmond-Brighouse
        [49.16825063014887, -123.13637453297012],

    ],
    [ 
        // Bridgeport
        [49.196667554631865, -123.12618507891636],
        // Templeton 
        [49.19681447842791, -123.14624890042657],
        // Sea Island Centre
        [49.19325994809377, -123.157820262565],
        // YVR-Airport
        [49.19445312445108, -123.17825301068314]
    ]
]

const redOptions = {color: 'red'}
const orangeOptions = {color: 'orange'}
const fillBlueOptions = {color: 'blue'}

const center:[number, number] = [49.25299, -123.00600];

const Map = () => {
    return (
        <MapContainer 
        style={{height: "100vh"}}
        center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer 
                attribution='&copy; <a href="">By Sierra Laurent</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.286657673017686, -123.11167716948354]} icon={icon} >
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>
            <Marker position={[49.28341042418389, -123.11837196324363]} icon={icon} >
                <Popup>
                    Vancouver City Centre
                </Popup>
            </Marker>
            <Marker position={[49.27557135624098, -123.1218051908129]} icon={icon} >
                <Popup>
                    yaletown-Roundhouse Station
                </Popup>
            </Marker>
            <Marker position={[49.26717097214363, -123.11571121187743]} icon={icon} >
                <Popup>
                    Olympic Village Station
                </Popup>
            </Marker>
            <Polyline pathOptions={fillBlueOptions} positions={multiPolyline}/>
        </MapContainer>

    )
}

export default Map;